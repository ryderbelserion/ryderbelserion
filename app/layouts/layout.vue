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
  twitterSite: "@ryderbelserion",
  twitterTitle: props.pageTitle,
  twitterImage: "https://ryderbelserion.com/assets/img/characters/beidou.webp",
  twitterCard: "summary_large_image",
})

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