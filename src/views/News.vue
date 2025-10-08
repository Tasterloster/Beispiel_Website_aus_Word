<script setup lang="ts">
import HeadlineCard from '@/components/HeadlineCard.vue'
import sourceDataRaw from '@/news-data.json'
import type { NewsInterface } from '@/components/NewsInterface.ts'
import { computed } from 'vue'

const sourceData = sourceDataRaw as { news: NewsInterface[] }

const featured = computed(() => sourceData.news?.[0])
const nonfeaturedNews = computed(() => sourceData.news?.slice(1) ?? [])
</script>

<template>
  <div class="headlineBody">
      <div class="featureHeadlines">
        <headline-card class="content"
          v-if="featured"
          :news="featured"
        >
        </headline-card>
      </div>
      <div class="regularHeadlines">
        <headline-card
          v-if="nonfeaturedNews"
          v-for="nws in nonfeaturedNews"
          :key="nws.id"
          :news="nws"
        >
        </headline-card>
      </div>
  </div>
</template>

<style scoped>
.headlineBody {
  display: flex;
  flex-direction: row;
}

.headlineBody>.featureHeadlines {
  max-width: 45%;
  flex-direction: column;
  display: flex;
  height: fit-content;
}

.headlineBody>.regularHeadlines {
  display: flex;
  max-width: 45%;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  box-sizing: border-box;
}

</style>
