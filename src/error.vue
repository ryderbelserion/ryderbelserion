<script setup lang="ts">
import Header from "@/components/ui/header.vue";
import Footer from "@/components/ui/footer.vue";

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="layout">
    <Header></Header>

    <main>
      <div class="wrapper">
        <img src="/assets/img/beidou_transparent.png" alt="Captain Beidou">
        <p>You sure you know where you are going? Do you need a map?</p>

        <button @click="handleError">Go Back</button>
      </div>
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

.wrapper {
  flex-direction: column;
  display: flex;

  align-items: center;
  /* to make sure it stays in the middle? unless you want it to be full-width, in that case modify the `width` property down below to 100% */
  justify-self: center;

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