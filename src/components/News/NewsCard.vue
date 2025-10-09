<script setup lang="ts">
import type { NewsInterface } from '@/components/News/NewsInterface.ts'
import type { PropType } from 'vue'

const props = defineProps({
  news: { type: Object as PropType<NewsInterface>, required: true },
})
const emit = defineEmits<{
  (e: 'open', news: NewsInterface): void
}>()
</script>

<template>
  <div
    class="headlineCard"
    role="button"
    tabindex="0"
    @click="emit('open', props.news)"
    @keyup.enter.space="emit('open', props.news)"
  >
    <div class="picture">
      <img :src="`/images/news_images/${props.news.image}`" alt="Headline" />
      <h2>{{ props.news.name }} - {{ props.news.headline }}</h2>
    </div>
    <div class="text">
      <p>{{ props.news.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.headlineCard {
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
  align-items: flex-start;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 3em;
  }

  &:hover {
    box-shadow: 0 0 3px 1px rgba(0, 140, 186, 0.5);
  }

  &:focus-visible {
    outline: 2px solid #66a3ff;
    outline-offset: 2px;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .picture {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .picture > img {
    max-width: 30%;
    height: auto;
    border: 1px solid #2c3e50;
    margin: auto;
    border-radius: 15px;
  }
}


</style>
