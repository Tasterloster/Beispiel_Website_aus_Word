<script setup lang="ts">
import NewsCard from '@/components/News/NewsCard.vue'
import ModalPopup from '@/components/ModalPopup.vue'
import sourceDataRaw from '@/news-data.json'
import type { NewsInterface } from '@/components/News/NewsInterface.ts'
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
      <news-card
        v-if="featured"
        :news="featured"
        @open="openModal"
      />
    </div>

    <div class="regularHeadlines">
      <news-card
        v-for="nws in nonfeaturedNews"
        :key="nws.id"
        :news="nws"
        @open="openModal"
      />
    </div>
  </div>

  <ModalPopup class="popup" v-model="modalOpen" :news="selectedNews">
    <template v-slot:content_image>
      <img :src="`/images/news_images/${selectedNews?.image}`" :alt="selectedNews?.headline" />
    </template>
    <template v-slot:content_header>
      <h2>{{ selectedNews?.name }} – {{ selectedNews?.headline }}</h2>
    </template>
    <template v-slot:content_text>
      <p>{{ selectedNews?.text }}</p>
    </template>
  </ModalPopup>
</template>

<style scoped>
.welcome {
  text-indent: 25px;
  border-bottom: #2c3e50 1px dotted;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}


.headlineBody { display: flex; flex-direction: row; gap: 2em; box-shadow: 0 1px 0 rgba(44, 62, 80, 0.3);}
.headlineBody>.featureHeadlines { max-width: 55%; display: flex; flex-direction: column; align-content: center; padding: 0 2em 0 1em; box-shadow: 1px 0 rgba(44, 62, 80, 0.3)}
.headlineBody>.regularHeadlines { display: flex; max-width: 45%; flex-direction: column; box-sizing: border-box; }
@media (max-width: 900px) {
  .headlineBody { display: flex; flex-direction: column; gap: 1rem; }
  .headlineBody>.featureHeadlines { max-width: 100%; display: flex; flex-direction: column; align-content: center; padding: 0 0 0 0; box-shadow: 0 0 0 0;   border-bottom: #2c3e50 1px dotted;}
  .headlineBody>.regularHeadlines { display: flex; max-width: 100%; flex-direction: column; gap: 1em; box-sizing: border-box; }
}

</style>