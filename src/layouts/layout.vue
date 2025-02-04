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
  <header>
    <div class="buttons">
      <a href="/" class="button">Home</a>
      <a href="https://discord.gg/w7yCw4M9za" class="button">Discord</a>
    </div>
  </header>

  <!--<audio autoplay id="bg-music">
    <source src="/audio.ogg" type="audio/ogg">
  </audio>-->

  <h1>A cold beer after a hard day's work... Nothin' like it</h1>

  <!--<Footer/>-->
</template>

<style scoped>
  header {
    display: flex;

    height: 2.1em;
  }

  .buttons {
    display: inherit;

    align-content: center;
  }

  .button {
    display: inherit;

    padding: 10px 5px;

    user-select: none;
  }

  h1 {
    text-align: center;
    font-size: 0.8em;
  }
</style>