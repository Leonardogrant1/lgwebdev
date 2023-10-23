<script>
  import language from "../stores/language";
  import showModal from "../stores/showModal";
  import { translation } from "../language/languageDict";
</script>

<div
  id="contact"
  class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
>
  <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
    <h2
      class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    >
      <span class="relative inline-block"
        ><svg
          viewBox="0 0 52 24"
          fill="currentColor"
          class="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          ><defs
            ><pattern
              id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
              x="0"
              y="0"
              width=".135"
              height=".30"><circle cx="1" cy="1" r=".7" /></pattern
            ></defs
          ><rect
            fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
            width="52"
            height="24"
          /></svg
        ><span class="relative">
          {translation("contactMe", $language)}
        </span></span
      >
    </h2>
  </div>
  <div class="grid gap-8 row-gap-5 lg:grid-cols-3">
    <button on:click={() => showModal.set(true)}
      ><div
        class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl"
      >
        <div
          class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div
          class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col items-center mb-2 lg:flex-row">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"
            >
              <iconify-icon icon="mdi:email" class="text-3xl text-blue-700" />
            </div>
            <h6 class="font-semibold leading-5">Email</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">
            {translation("contactIntro", $language)}
          </p>
        </div>
      </div>
    </button><a
      href="https://www.linkedin.com/in/leonardo-granetto-371271225/"
      target="_blank"
      rel="noreferrer"
      aria-label=""
      ><div
        class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl"
      >
        <div
          class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div
          class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col items-center mb-2 lg:flex-row">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"
            >
              <iconify-icon
                icon="mdi:linkedin"
                class="text-3xl text-blue-700"
              />
            </div>
            <h6 class="font-semibold leading-5">LinkedIn</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">
            {translation("contactLinkedIn", $language)}
          </p>
        </div>
      </div></a
    ><a
      href="https://github.com/leonardogrant1"
      target="_blank"
      rel="noreferrer"
      aria-label=""
      ><div
        class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl"
      >
        <div
          class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div
          class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col items-center mb-2 lg:flex-row">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"
            >
              <iconify-icon icon="mdi:github" class="text-3xl text-blue-700" />
            </div>
            <h6 class="font-semibold leading-5">GitHub</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">
            {translation("contactGitHub", $language)}
          </p>
        </div>
      </div></a
    ><a
      href="https://de.fiverr.com/s2/16f31ff1fb"
      target="_blank"
      rel="noreferrer"
      aria-label=""
      ><div
        class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl"
      >
        <div
          class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div
          class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"
        />
        <div
          class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"
        />
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col items-center mb-2 lg:flex-row">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-3xl text-blue-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                  d="M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4z"
                /></svg
              >
            </div>
            <h6 class="font-semibold leading-5">Fiverr</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">
            {translation("contactFiverr", $language)}
          </p>
        </div>
      </div></a
    >
  </div>
</div>
