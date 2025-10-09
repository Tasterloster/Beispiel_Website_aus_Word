<script setup lang="ts">
import HeadlineCard from '@/components/HeadlineCard.vue'
import ModalPopup from '@/components/ModalPopup.vue'
import sourceDataRaw from '@/news-data.json'
import type { NewsInterface } from '@/components/NewsInterface.ts'
import { computed, ref } from 'vue'

const sourceData = sourceDataRaw as { news: NewsInterface[] }

const featured = computed(() => sourceData.news?.[0])
const nonfeaturedNews = computed(() => sourceData.news?.slice(1) ?? [])

const modalOpen = ref(false)
const selectedNews = ref<NewsInterface | null>(null)

function openModal(n: NewsInterface) {
  selectedNews.value = n
  modalOpen.value = true
}
</script>

<template>
  <div class="headlineBody">
    <div class="featureHeadlines">
      <h1 class="welcome">Featured</h1>
      <headline-card
        v-if="featured"
        :news="featured"
        @open="openModal"
      />
    </div>

    <div class="regularHeadlines">
      <headline-card
        v-for="nws in nonfeaturedNews"
        :key="nws.id"
        :news="nws"
        @open="openModal"
      />
    </div>
  </div>

  <ModalPopup v-model="modalOpen" :news="selectedNews" />
</template>

<style scoped>
.welcome {
  text-indent: 25px;
}
.headlineBody { display: flex; flex-direction: row; gap: 1rem; }
.headlineBody>.featureHeadlines { max-width: 55%; display: flex; flex-direction: column; align-content: center; }
.headlineBody>.regularHeadlines { display: flex; max-width: 45%; flex-direction: column; gap: 1em; box-sizing: border-box; }
@media (max-width: 900px) {
  .headlineBody { display: flex; flex-direction: column; gap: 1rem; }
  .headlineBody>.featureHeadlines { max-width: 100%; display: flex; flex-direction: column; align-content: center; }
  .headlineBody>.regularHeadlines { display: flex; max-width: 100%; flex-direction: column; gap: 1em; box-sizing: border-box; }
}
</style>