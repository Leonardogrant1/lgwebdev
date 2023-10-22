<script>
  import { translation } from "../language/languageDict";

  import language from "../stores/language";
</script>

<section
  id="about"
  class="flex spacings flex-wrap 2x justify-center mt-36 xl:justify-between"
>
  <div
    class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 flex flex-col gap-14 justify-center"
  >
    <div class="inline-flex flex-1 max-w-[500px] flex-col justify-center">
      <div class="max-w-xl mb-6 inline-flex flex-col">
        <h1
          class="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6"
        >
          {translation("greeting", $language)}
          <span class="inline-block text-blue-500">Leonardo</span>
        </h1>
        <h2 class="text-gray-700 text-base md:text-lg">
          {translation("intro", $language)}
        </h2>
        <p class="mt-4 text-gray-700 text-base md:text-base">
          {translation("webIdeas", $language)}
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <a
          href="/#about_2"
          class="items-center h-12 px-6 py-3 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-md border border-gray-800 hover:bg-gray-800 hover:text-white"
        >
          {translation("aboutMe", $language)}
        </a><a
          href="https://www.fiverr.com/jimenezraul?up_rollout=true"
          target="_blank"
          class="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
        >
          {translation("hireMe", $language)}
        </a>
      </div>
    </div>
  </div>

  <div class="inline-flex items-end justify-center">
    <img
      src="/me.svg"
      class="w-[450px] lg:w-[500px] xl:w-[550px] 2xl:w-[580px]"
      alt="Leonardo Granetto"
    />
  </div>
</section>
<section
  id="about_2"
  class="bg-blue-950 spacings flex flex-col items-center text-white py-20 space-y-20"
>
  <h2 class="text-5xl">{translation("aboutMe", $language)}</h2>

  <div class="flex flex-row flex-wrap">
    <div
      class="inline-flex rounded-xl items-center overflow-hidden flex-1 flex-col space-y-3 p-6 basis-96"
    >
      <img
        src="/me_2.jpg"
        class="rounded-xl max-h-[600px]"
        alt="Leonardo Granetto"
      />
    </div>
    <div class="inline-flex flex-1 flex-col space-y-3 p-6 basis-96">
      <p class="text-lg">{translation("aboutMeText", $language)}</p>
    </div>
  </div>
</section>
