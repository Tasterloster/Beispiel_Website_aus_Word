<script setup lang="ts">
import sourceDataRaw from '@/routing-data.json'
import { ref } from 'vue'

const footerRoutes = ref(sourceDataRaw.footer.routes)
</script>

<template>
  <div>

  </div>
  <router-link
    class="navLink"
    v-for="route in footerRoutes"
    :key="route.id"
    :to="route.path">{{route.text}}</router-link>
</template>

<style scoped></style>
