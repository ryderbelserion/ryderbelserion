<script setup lang="ts">
import Wrapper from "@/components/ui/waifus/wrapper.vue";
import Character from "@/components/ui/waifus/types/character.vue";
</script>

<template>
  <Wrapper>
    <Character alt-text="Beidou, Captain of The Cruz" image-path="beidou.webp" character-title="The Captain of the Crux" character-name="Beidou"></Character>
    <Character alt-text="Feixiao, Merlin's Claw of the Xianzhou Yaoqing, and one of the Seven Arbiter-Generals" image-path="feixiao.webp" character-title="Merlin's Claw of the Xianzhou Yaoqing" character-name="Feixiao"></Character>
    <Character alt-text="Acheron, Emanator of IX the Nihility" image-path="acheron.webp" character-title="Emanator of IX the Nihility" character-name="Acheron"></Character>
  </Wrapper>
</template>

<style scoped>
  img {
    height: 115px;
    width: 115px;
    border-radius: 50%;

    padding-top: 7px;
  }
</style>