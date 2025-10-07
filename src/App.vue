<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <div class="bodyContainer">
    <div class="header">
      <TheNavigation> </TheNavigation>
    </div>

    <div class="container">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style scoped>
.bodyContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
}
</style>
