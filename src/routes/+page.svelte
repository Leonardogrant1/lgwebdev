<script>
  import { onMount } from "svelte";
  import About from "../components/about.svelte";
  import Contact from "../components/contact.svelte";
  import EmailContactForm from "../components/email_contact_form.svelte";
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
  import Projects from "../components/projects.svelte";
  import Skills from "../components/skills.svelte";

  import showModal from "../stores/showModal";
  import language from "../stores/language";

  onMount(() => {
    const userLanguage = navigator.language || "en-EN";
    language.set(userLanguage);
  });
</script>

<main
  class={`w-full h-screen flex-col content-start flex ${
    $showModal ? "overflow-hidden" : "overflow-auto"
  }`}
>
  {#if $showModal}
    <EmailContactForm />
  {/if}
  <Header />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</main>

<svelte:head>
  <title>LGWebDev</title>
  <meta
    name="description"
    content="Ihr Fullstack Webentwickler für maßgeschneiderte Lösungen. Entdecken Sie kreative Webentwicklung und innovative Designs, um Ihre Online-Präsenz zu optimieren."
  />
</svelte:head>
