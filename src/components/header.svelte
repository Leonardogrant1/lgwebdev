<script>
  import language from "../stores/language";
  import { translation } from "../language/languageDict";
</script>

<header
  class="w-full flex justify-between content-center px-5 lg:px-36 xl:px-60 py-4 bg-black"
>
  <img src="/logo.svg" class="w-40" alt="webentwickler" />

  <nav class="flex-col justify-center hidden lg:flex">
    <ul class="flex space-x-14 text-white">
      <li><a href="/#about"> {translation("aboutMe", $language)} </a></li>
      <li><a href="/#skills"> {translation("skills", $language)} </a></li>
      <li><a href="/#projects"> {translation("projects", $language)} </a></li>
    </ul>
  </nav>

  <a href="/#contact">
    <button
      class="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
    >
      {translation("contactMe", $language)}
    </button>
  </a>
</header>
