<script setup lang="ts">
import Layout from "@/layouts/layout.vue";

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Layout page-description="My cozy little tavern in the far corner of the internet." page-title="Ryder Belserion's Tavern">
    <div class="wrapper">
      <img src="/assets/img/beidou_transparent.png" alt="Captain Beidou">
      <p>You sure you know where you are going? Do you need a map?</p>

      <button @click="handleError">Go Back</button>
    </div>
  </Layout>
</template>

<style scoped>
.wrapper {
  flex-direction: column;
  display: flex;

  align-items: center;

  background-color: blue;

  width: 65%;
}

img {
  height: auto;
  max-width: 100%;
}

button {
  border-color: red;
  border-style: dashed;
  border-width: 1px;
  border-radius: 15px;

  max-width: 10%;

  background-color: transparent;

  color: inherit;
}

button:hover {
  color: blue;
}

p {
  font-size: 16px;
}
</style>

<!--<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>-->