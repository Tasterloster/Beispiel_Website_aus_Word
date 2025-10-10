<script setup lang="ts">
import sourceDataRaw from '@/Routing.json'
import { ref } from 'vue'

const headerDesktopRoutes = ref(sourceDataRaw.header.routes)

</script>

<template>
  <div id="nav">
    <router-link
      class="navLink"
      v-for="route in headerDesktopRoutes"
      :key="route.id"
      :to="route.path"
    >{{route.text}}</router-link>
  </div>
</template>

<style scoped></style>
