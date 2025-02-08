<script setup>
import Layout from "@/layouts/layout.vue";
import Games from "@/components/ui/waifus/games.vue";
</script>

<template>
  <Layout page-title="Ryder Belserion's Tavern" page-description="My cozy little tavern in the far corner of the internet.">
    <h1 class="page-title">Waifus</h1>

    <!--<h1 class="switch-button">Anime</h1>
    <h1 class="switch-button">Games</h1>-->

    <Games></Games>
  </Layout>
</template>

<style scoped>
  .page-title {
    text-align: center;
  }
</style>