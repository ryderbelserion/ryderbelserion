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
  ogDescription: props.pageDescription,

  twitterDescription: props.pageDescription,
  twitterSite: "https://ryderbelserion.com",
  twitterImage: "https://ryderbelserion.com/assets/profile.png",
  twitterCard: "summary_large_image",
})

</script>

<template>
  <div class="flex-wrapper">
    <Header></Header>

    <div class="outer-container">
      <slot></slot>
    </div>

    <Footer/>
  </div>
</template>

<style scoped>
  .outer-container {
    height: 54em;
  }

  .flex-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
</style>