<script setup lang="ts">
import TheDesktopNavigation from '@/components/TheDesktopNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMobileNavigator from '@/components/TheMobileNavigator.vue'
</script>

<template>
  <div class="bodyContainer">
    <div class="headerDesktop">
      <TheDesktopNavigation></TheDesktopNavigation>
    </div>
    <div class="headerMobile">
      <TheMobileNavigator></TheMobileNavigator>
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

</style>
