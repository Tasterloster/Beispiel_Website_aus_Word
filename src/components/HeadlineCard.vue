<script setup lang="ts">
import type { NewsInterface } from '@/components/NewsInterface.ts'
import type { PropType } from 'vue'

const props = defineProps({
  news: { type: Object as PropType<NewsInterface>, required: true },
})
</script>

<template>
  <div class="headlineCard">
    <img :src="`/images/${props.news.image}`" alt="Headline" />
    <div class="headlineCard__text">
      <router-link to="modalPopup"></router-link>
      <h1>{{ props.news.headline }}</h1>
      <p>{{ props.news.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.headlineCard {
  display: flex;
  flex-direction: row;
  padding: 2em;
  gap: 1em;
  align-items: flex-start;
}

.headlineCard__text{
  display: flex;
  flex-direction: column;
}

.headlineCard > img {
  max-width: 40%;
  height: auto;
  border: 1px solid #2c3e50;
  margin: auto;
}
.headlineCard:hover {
  box-shadow: 0 0 3px 1px rgba(0, 140, 186, 0.5);
}
</style>
