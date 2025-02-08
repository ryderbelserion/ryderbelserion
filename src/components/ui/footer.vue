<template>
  <footer>
    <img src="@/assets/img/characters/chibi/acheron.webp" alt="a chibi version of the Galaxy Ranger Acheron">
    <img src="@/assets/img/characters/chibi/beidou.webp" alt="a chibi version of Captain Beidou">
    <img src="@/assets/img/characters/chibi/feixiao.webp" alt="a chibi version of General Feixiao">
  </footer>
</template>

<style scoped>
@media only screen and (min-width: 100px) {
  footer {
    height: 2.5em;
    width: 35px;
  }

  img {
    width: 4em !important;
  }
}

footer {
  background-color: var(--secondary-body);

  padding: 1em 0.5em;
  height: 3.5em;
  text-align: center;
  width: 100%;
}

img {
  padding-left: 1.5em;

  width: 7em;
}
</style>