<script lang="ts">
  import language from "../stores/language";
  import Skillchip from "./skillchip.svelte";
  import { translation } from "../language/languageDict";
  import type { DictData } from "../language/languageDict";
  import Image from "svelte-image";

  const projects = [
    {
      name: "Frogeex",
      img: "/frogeex.png",
      type: "E-Commerce",
      descriptionKey: "frogeexText" as DictData,

      stack: [
        { icon: "simple-icons:lit", skill: "Lit", color: "bg-blue-700" },
        {
          icon: "akar-icons:node-fill",
          skill: "NodeJS",
          color: "bg-green-700",
        },
        { icon: "mdi:graphql", skill: "GraphQL", color: "bg-pink-700" },
        { icon: "simple-icons:express", skill: "Express", color: "bg-black" },
        { icon: "simple-icons:reactivex", skill: "RxJs", color: "bg-pink-800" },
        { icon: "bi:stripe", skill: "Stripe API", color: "bg-blue-600" },
        {
          icon: "ic:baseline-paypal",
          skill: "Paypal API",
          color: "bg-blue-500",
        },
        {
          icon: "simple-icons:ghost",
          skill: "Ghost API",
          color: "bg-black",
        },
      ],
      link: "https://www.frogeex.com",
    },

    {
      name: "Fox Department",
      type: "Consulting",

      img: "/fox_department.png",
      descriptionKey: "foxdepartmentText" as DictData,

      stack: [
        { icon: "simple-icons:lit", skill: "Lit", color: "bg-blue-700" },
        {
          icon: "akar-icons:node-fill",
          skill: "NodeJS",
          color: "bg-green-700",
        },
        {
          icon: "teenyicons:mongodb-outline",
          skill: "MongoDB",
          color: "bg-green-700",
        },

        { icon: "mdi:graphql", skill: "GraphQL", color: "bg-pink-700" },
        { icon: "simple-icons:express", skill: "Express", color: "bg-black" },
        { icon: "simple-icons:reactivex", skill: "RxJs", color: "bg-pink-800" },
      ],
      link: "https://www.foxdepartment.de/",
    },

    {
      name: "Studio Onomato",
      type: "Architekt",
      img: "/studio_onomato.png",
      descriptionKey: "studioonomatoText" as DictData,

      stack: [
        {
          icon: "teenyicons:react-solid",
          skill: "React",
          color: "bg-blue-500",
        },

        {
          icon: "akar-icons:redux-fill",
          skill: "Redux",
          color: "bg-purple-700",
        },

        { icon: "mdi:tailwind", skill: "TailwindCSS", color: "bg-blue-400" },
        {
          icon: "akar-icons:node-fill",
          skill: "NodeJS",
          color: "bg-green-700",
        },

        { icon: "teenyicons:nextjs-solid", skill: "NextJs", color: "bg-black" },
        { icon: "simple-icons:express", skill: "Express", color: "bg-black" },
        { icon: "ri:supabase-fill", skill: "Supabase", color: "bg-green-500" },
      ],
      link: "https://www.studioonomato.de",
    },

    {
      name: "David Service",
      type: "Facility-Management",
      descriptionKey: "davidserviceText" as DictData,

      img: "/david_service.png",
      description: `David Service ist ein Facility Management-Unternehmen mit Schwerpunkt in Wiesbaden, Mainz und Umgebung. Sie bieten umfassende Dienstleistungen in den Bereichen Hausmeisterservices, Gartenpflege, Entrümpelungen und mehr. David Service zeichnet sich durch Qualität und Zuverlässigkeit in all ihren Dienstleistungen aus. Ihr erfahrenes Team ist darauf spezialisiert, Immobilien in erstklassigem Zustand zu halten, und sie haben sich einen hervorragenden Ruf für erstklassigen Service und Kundenzufriedenheit erarbeitet. Sie bieten professionelle Dienstleistungen wie Taubenabwehr, Schädlingsbekämpfung, Haushaltsauflösungen und umfassende Hausmeisterdienste in der Region Wiesbaden, Mainz und Frankfurt an, sowohl für Privathaushalte als auch für Unternehmen.`,
      stack: [
        {
          icon: "teenyicons:react-solid",
          skill: "React",
          color: "bg-blue-500",
        },

        {
          icon: "akar-icons:redux-fill",
          skill: "Redux",
          color: "bg-purple-700",
        },

        { icon: "mdi:tailwind", skill: "TailwindCSS", color: "bg-blue-400" },
        {
          icon: "akar-icons:node-fill",
          skill: "NodeJS",
          color: "bg-green-700",
        },

        { icon: "teenyicons:nextjs-solid", skill: "NextJs", color: "bg-black" },
        { icon: "simple-icons:express", skill: "Express", color: "bg-black" },
      ],
      link: "https://www.david-service.de",
    },

    {
      name: "MySocials",
      img: "/mysocials.png",
      type: "Mobile App",
      descriptionKey: "mysocialsText" as DictData,

      stack: [
        { icon: "simple-icons:lit", skill: "Lit", color: "bg-blue-700" },
        {
          icon: "akar-icons:node-fill",
          skill: "NodeJS",
          color: "bg-green-700",
        },
        {
          icon: "teenyicons:mongodb-outline",
          skill: "MongoDB",
          color: "bg-green-700",
        },
        {
          icon: "simple-icons:ionic",
          skill: "Ionic Capacitor",
          color: "bg-blue-600",
        },

        {
          icon: "mdi:firebase",
          skill: "Firebase",
          color: "bg-yellow-500",
        },
        {
          icon: "mdi:mapbox",
          skill: "Mapbox",
          color: "bg-black",
        },
        { icon: "mdi:graphql", skill: "GraphQL", color: "bg-pink-700" },
        { icon: "simple-icons:express", skill: "Express", color: "bg-black" },
        { icon: "simple-icons:reactivex", skill: "RxJs", color: "bg-pink-800" },
        { icon: "bi:stripe", skill: "Stripe API", color: "bg-blue-600" },
        {
          icon: "ic:baseline-paypal",
          skill: "Paypal API",
          color: "bg-blue-500",
        },
      ],
      link: "https://www.david-service.de",
    },
  ];
</script>

<section
  id="projects"
  class="bg-blue-950 px-5 lg:px-36 xl:px-60 flex flex-col items-center text-white py-20 space-y-20"
>
  <h2 class="text-5xl">{translation("projects", $language)}</h2>

  <div class="flex flex-row gap-4 flex-wrap w-full">
    {#each projects as project}
      <div
        class="inline-flex flex-col flex-1 basis-96 bg-white text-black rounded overflow-hidden"
      >
        <div class="w-full">
          <Image src={project.img} ratio="55%" alt={project.name} />
        </div>
        <div class="p-5 h-full flex flex-col space-y-4">
          <h3 class="text-3xl">{project.name}</h3>

          <p>{translation(project.descriptionKey, $language)}</p>

          <div />
        </div>

        <div class="p-5 space-y-6">
          <h3 class="text-2xl">Tech:</h3>
          <div class="flex flex-wrap flex-row gap-2">
            {#each project.stack as stack}
              <Skillchip
                icon={stack.icon}
                color={stack.color}
                skill={stack.skill}
              />
            {/each}
          </div>
        </div>
        <a href={project.link} target="_blank">
          <button
            class="m-5 items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
          >
            {translation("viewPage", $language)}
          </button>
        </a>
      </div>
    {/each}
  </div>
</section>
