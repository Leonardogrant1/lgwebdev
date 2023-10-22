<script lang="ts">
  import "iconify-icon";
  import Skillchip from "./skillchip.svelte";
  import language from "../stores/language";
  import { translation } from "../language/languageDict";
</script>

<section
  id="skills"
  class="px-5 lg:px-36 xl:px-60 flex flex-col items-center py-20 space-y-20"
>
  <h2 class="text-5xl">{translation("skills", $language)}</h2>

  <div class="flex gap-9 flex-wrap">
    <div class="inline-flex flex-1 flex-col items-center space-y-7 basis-80">
      <div
        class="rounded-full p-9 bg-gray-500 aspect-square w-28 flex items-center justify-center"
      >
        <iconify-icon icon="gg:screen" class="text-3xl text-white" />
      </div>
      <h2 class="text-2xl">FrontEnd</h2>

      <div class="flex flex-wrap flex-row gap-2 max-w-md">
        <Skillchip
          icon="akar-icons:html-fill"
          skill="HTML"
          color="bg-red-600"
        />
        <Skillchip
          icon="akar-icons:css-fill"
          skill="CSS3"
          color="bg-blue-600"
        />
        <Skillchip
          icon="cib:javascript"
          skill="JavaScript"
          color="bg-yellow-600"
        />
        <Skillchip
          icon="cib:typescript"
          skill="TypeScript"
          color="bg-blue-800"
        />
        <Skillchip
          icon="teenyicons:react-solid"
          skill="React"
          color="bg-blue-500"
        />
        <Skillchip
          icon="akar-icons:redux-fill"
          skill="Redux"
          color="bg-purple-700"
        />
        <Skillchip
          icon="teenyicons:nextjs-solid"
          skill="NextJs"
          color="bg-black"
        />
        <Skillchip icon="logos:svelte-kit" skill="" color="bg-gray-300" />
        <Skillchip
          icon="mdi:tailwind"
          skill="TailwindCSS"
          color="bg-blue-400"
        />
        <Skillchip icon="simple-icons:dart" skill="Dart" color="bg-blue-500" />
        <Skillchip
          icon="material-symbols:flutter"
          skill="Flutter"
          color="bg-blue-300"
        />
        <Skillchip
          icon="teenyicons:svelte-solid"
          skill="Svelte"
          color="bg-orange-500"
        />
      </div>
    </div>
    <div class="inline-flex flex-1 flex-col items-center space-y-7 basis-80">
      <div
        class="rounded-full p-9 bg-gray-500 aspect-square w-28 flex items-center justify-center"
      >
        <iconify-icon icon="ion:server" class="text-3xl text-white" />
      </div>
      <h2 class="text-2xl">BackEnd</h2>

      <div class="flex flex-wrap flex-row gap-2 max-w-md">
        <Skillchip
          icon="akar-icons:node-fill"
          skill="NodeJS"
          color="bg-green-700"
        />
        <Skillchip
          icon="simple-icons:express"
          skill="Express"
          color="bg-black"
        />
        <Skillchip
          icon="teenyicons:mongodb-outline"
          skill="MongoDB"
          color="bg-green-700"
        />
        <Skillchip
          icon="simple-icons:mongoose"
          skill="Mongoose"
          color="bg-yellow-950"
        />
        <Skillchip icon="mdi:graphql" skill="GraphQL" color="bg-pink-700" />
        <Skillchip
          icon="file-icons:apollo"
          skill="Apollo GraphQL"
          color="bg-blue-800"
        />
        <Skillchip
          icon="teenyicons:python-outline"
          skill="Python"
          color="bg-cyan-900"
        />
        <Skillchip
          icon="ri:supabase-fill"
          skill="Supabase"
          color="bg-green-500"
        />
        <Skillchip icon="mdi:firebase" skill="Firebase" color="bg-yellow-500" />
        <Skillchip icon="mdi:docker" skill="Docker" color="bg-blue-700" />
        <Skillchip
          icon="simple-icons:nginx"
          skill="Nginx"
          color="bg-green-800"
        />
      </div>
    </div>

    <div class="inline-flex flex-1 flex-col items-center space-y-7 basis-80">
      <div
        class="rounded-full p-9 bg-gray-500 w-28 flex aspect-square items-center justify-center"
      >
        <iconify-icon icon="fa-solid:tools" class="text-3xl text-white" />
      </div>
      <h2 class="text-2xl">Tools</h2>

      <div class="flex flex-wrap flex-row gap-2 max-w-md">
        <Skillchip icon="mdi:git" skill="Git" color="bg-red-500" />
        <Skillchip icon="mdi:github" skill="Github" color="bg-black" />
        <Skillchip
          icon="teenyicons:netlify-outline"
          skill="Netlify"
          color="bg-cyan-500"
        />
        <Skillchip
          icon="akar-icons:vscode-fill"
          skill="VSCode"
          color="bg-blue-400"
        />
        <Skillchip
          icon="simple-icons:xcode"
          skill="Xcode"
          color="bg-blue-800"
        />
        <Skillchip
          icon="simple-icons:androidstudio"
          skill="Android Studio"
          color="bg-green-700"
        />
      </div>
    </div>
  </div>
</section>
