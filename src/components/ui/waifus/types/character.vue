<script setup>
const props = defineProps({
  characterName: {
    type: String,
    required: true
  },

  characterTitle: {
    type: String,
    required: true
  },

  imagePath: {
    type: String,
    required: true
  },

  altText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="character-profile">
    <slot></slot>

    <div class="character-description">
      <h1 class="character-name">{{ props.characterName}} </h1>

      <span class="character-title">{{ props.characterTitle}} </span>
    </div>
  </div>
</template>

<style scoped>
  .character-profile {
    background-color: var(--secondary-body);

    height: 13em;
    width: 14em;

    margin: 15px 15px auto;

    border-radius: 17px;

    text-align: center;
  }

  .character-profile:hover {
    border-color: var(--hover-color);
    border-style: solid;

    background-color: transparent;
  }

  .character-name {
    font-size: 1em;
  }

  .character-title {
    font-size: 0.7em;
  }
</style>