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
  ogSiteName: "Ryder's Tavern",
  ogImage: "https://ryderbelserion.com/assets/img/characters/beidou.webp",
  ogUrl: "https://ryderbelserion.com",
  ogDescription: props.pageDescription,

  twitterDescription: props.pageDescription,
  twitterSite: "https://ryderbelserion.com",
  twitterTitle: props.pageTitle,
  twitterImage: "https://ryderbelserion.com/assets/img/characters/beidou.webp",
  twitterCard: "summary_large_image",
})

useHead({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

</script>

<template>
  <html>
    <body>
      <div class="layout">
        <Header></Header>

        <main>
          <slot></slot>
        </main>

        <Footer/>
      </div>
    </body>
  </html>
</template>

<style scoped>
  main {
    width: 100%;
  }

  .layout {
    display: inherit;
    flex-direction: inherit;

    align-self: center;

    height: 100%;
    min-height: 100vh;
    width: 100%;

    max-width: var(--wrap);
  }
</style>