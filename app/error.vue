<script setup lang="ts">
import Header from "@/components/ui/header.vue";
import Footer from "@/components/ui/footer.vue";

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: "Ryder's Tavern | Error"
})
</script>

<template>
  <div class="layout">
    <Header/>

    <div class="main">
      <div class="container">
        <NuxtImg class="avatar" src="/img/beidou_transparent.png" alt="Error" width="256" height="256"/>

        <span>You sure you know where you are going? Do you need a map?</span>

        <button @click="handleError">Go Back</button>
      </div>
    </div>

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

.container {
  flex-direction: column;
  display: flex;

  align-items: center;
  /* to make sure it stays in the middle? unless you want it to be full-width,
  in that case modify the `width` property down below to 100% */
  justify-self: center;

  padding: 13em;
  width: 65%;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  background-color: var(--button-color);
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;

  height: 2.6em;
  width: 7em;

  color: var(--text-main);
}

button:hover {
  border-color: var(--button-color);
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;

  background-color: transparent;

  color: var(--text-main);

  cursor: pointer;
}

p {
  font-size: 16px;
}
</style>