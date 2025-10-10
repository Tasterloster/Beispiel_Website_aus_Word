<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="bodyContainer">
    <div class="header">
      <TheNavigation> </TheNavigation>
    </div>

    <div class="container">
      <router-view> </router-view>
    </div>
    <div class="footer">
      <theFooter></theFooter>
    </div>
  </div>
</template>

<style scoped>
.bodyContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

.header, .footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(44, 62, 80, 0.1);
  width: 100%;
  height: 4.5em;
}
</style>
