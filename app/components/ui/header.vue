<template>
  <header>
    <div class="buttons">
      <!-- use nuxt-link to avoid re-fetching the page -->
      <NuxtLink to="/" class="button">Home</NuxtLink>
      <NuxtLink to="/waifus" class="button">Waifus</NuxtLink>
      <NuxtLink to="/projects" class="button">Projects</NuxtLink>
      <NuxtLink to="https://discord.gg/w7yCw4M9za" class="button">Discord</NuxtLink>
    </div>
  </header>

  <h1>A cold beer after a hard day's work... Nothin' like it</h1>
</template>

<style scoped>
header {
  height: 2.1em;

  margin: 0 auto;

  user-select: none;
}

h1 {
  margin: 0 auto;
  font-size: 0.8em;
}

img {
  padding: 10px;
}

.button {
  padding: 10px 5px;

  color: inherit;

  text-decoration: none;

  line-height: 16px;
}
</style>