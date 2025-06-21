<script setup>
import Header from "@/components/ui/header.vue";
import Footer from "@/components/ui/footer.vue";

const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },

  pageDescription: {
    type: String,
    required: true
  }
})

useSeoMeta({
  title: props.pageTitle,
  description: props.pageDescription,

  ogTitle: props.pageTitle,
  ogSiteName: "Ryder Belserion's Tavern",
  ogImage: "https://ryderbelserion.com/assets/img/characters/beidou.webp",
  ogUrl: "https://ryderbelserion.com",
  ogDescription: props.pageDescription,

  twitterDescription: props.pageDescription,
  twitterSite: "https://ryderbelserion.com",
  twitterTitle: props.pageTitle,
  twitterImage: "https://ryderbelserion.com/assets/img/characters/beidou.webp",
  twitterCard: "summary_large_image",
})

/* unless you need to replace these on each page, you can make them default in nuxt.config.ts */
/*useHead({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})*/

</script>

<template>
  <div class="layout">
    <Header/>

    <main>
      <slot></slot>
    </main>

    <Footer/>
  </div>
</template>

<style scoped>
  main {
    min-width: 100%;
  }

  .layout {
    display: flex;
    flex-direction: column;

    align-self: center;

    min-height: 100vh;
    min-width: 100vw; /* maybe you want this to be var(--wrap) instead? your choice */

    max-width: var(--wrap);
  }
</style>