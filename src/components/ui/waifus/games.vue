<script setup lang="ts">
import Wrapper from "@/components/ui/waifus/wrapper.vue";
import Character from "@/components/ui/waifus/types/character.vue";
</script>

<template>
  <Wrapper>
    <Character alt-text="Beidou, Captain of The Cruz" image-path="beidou" character-title="The Captain of the Crux" character-name="Beidou">
      <img src="@/assets/img/characters/beidou.webp" alt="Beidou, Captain of The Cruz">
    </Character>
    <Character alt-text="Feixiao, Merlin's Claw of the Xianzhou Yaoqing, and one of the Seven Arbiter-Generals" image-path="feixiao" character-title="Merlin's Claw of the Xianzhou Yaoqing" character-name="Feixiao">
      <img src="@/assets/img/characters/feixiao.webp" alt="Feixiao, Merlin's Claw of the Xianzhou Yaoqing, and one of the Seven Arbiter-Generals">
    </Character>
    <Character alt-text="Feixiao, Emanator of IX the Nihility" image-path="acheron" character-title="Emanator of IX the Nihility" character-name="Acheron">
      <img src="@/assets/img/characters/acheron.webp" alt="Feixiao, Emanator of IX the Nihility">
    </Character>
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