<script lang="ts">
  import language from "../stores/language";
  import showModal from "../stores/showModal";
  import { translation } from "../language/languageDict";
  import { scale } from "svelte/transition";

  let success = false;
  let error = false;
  let isLoading = false;

  let fullname: string;
  let email: string;
  let message: string;

  let phone: string;

  function isValidEmail(email: string): boolean {
    const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
  }

  async function validateForm(e: SubmitEvent) {
    e.preventDefault();

    const data = {
      name: fullname,
      email: email,
      phone: phone,
      message: message,
    };

    if (!fullname || !email || !phone || !message) {
      alert("Füllen Sie bitte alle Felder aus");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Geben Sie eine valide Email an");
      return;
    }
    isLoading = true;

    const res = await fetch("/api/mailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("diaosd", res);

    if (res.ok) {
      isLoading = false;
      success = true;
    }
    if (!res.ok) {
      isLoading = false;
      error = true;
    }
  }
</script>

<div
  on:click|self={() => showModal.set(!$showModal)}
  class={`w-full fixed inset-0 z-30 bg-black bg-opacity-20 ${
    $showModal ? "flex" : "hidden"
  } flex justify-center items-center`}
>
  <div
    transition:scale
    class="w-full max-w-xl aspect-square p-5 bg-white rounded h-3/4 md:h-auto"
  >
    {#if success}
      <div class="space-y-7 flex h-full flex-col justify-center items-center">
        <h2 class="text-3xl">{translation("thanks", $language)}</h2>

        <p class="text-lg">{translation("iBeInTouch", $language)}</p>

        <button
          on:click={() => showModal.set(!$showModal)}
          class="items-center h-12 px-10 py-3 self-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
        >
          {translation("close", $language)}
        </button>
      </div>
    {:else if isLoading}
      <div class="space-y-7 flex h-full flex-col justify-center items-center">
        <div
          class="ease-linear rounded-full border-4 border-t-4 border-t-blue-500 h-12 w-12 animate-spin"
        />
      </div>
    {:else if error}
      <div class="space-y-7 flex h-full flex-col justify-center items-center">
        <h2 class="text-3xl">{translation("somethingWentWrong", $language)}</h2>

        <p class="text-lg">{translation("tryAgainLater", $language)}</p>

        <div class="flex space-x-4">
          <button
            on:click={() => {
              error = false;
              success = false;
            }}
            class="items-center h-12 px-10 py-3 self-start font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md border-blue-500 border-2 hover:text-white hover:bg-blue-700"
          >
            {translation("retry", $language)}
          </button>

          <button
            on:click={() => showModal.set(!$showModal)}
            class="items-center h-12 px-10 py-3 self-start font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
          >
            {translation("close", $language)}
          </button>
        </div>
      </div>
    {:else}
      <h2 class="text-3xl text-center mb-11 mt-5">
        {translation("contactMe", $language)}
      </h2>
      <form class="flex flex-col space-y-3" on:submit={validateForm}>
        <input
          class="bg-gray-200 rounded p-3 focus:outline-blue-400"
          placeholder="Name"
          bind:value={fullname}
        />
        <input
          class="bg-gray-200 rounded p-3 focus:outline-blue-400"
          placeholder="Email"
          bind:value={email}
        />
        <input
          class="bg-gray-200 rounded p-3 focus:outline-blue-400"
          placeholder={translation("phone", $language)}
          bind:value={phone}
        />
        <textarea
          class="bg-gray-200 rounded p-3 focus:outline-blue-400"
          placeholder={translation("message", $language)}
          bind:value={message}
          rows="5"
        />

        <button
          type="submit"
          class="items-center h-12 px-10 py-3 self-start font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
        >
          {translation("send", $language)}
        </button>
      </form>
    {/if}
  </div>
</div>
