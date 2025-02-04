<script setup>
import Footer from "~/components/ui/footer.vue";

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
  <!--<audio autoplay id="bg-music">
    <source src="/audio.ogg" type="audio/ogg">
  </audio>-->

  <Footer/>
</template>