<script setup lang="ts">
import TheFooter from '@/components/Routing/TheFooter.vue'
import TheMobileNavigator from '@/components/Routing/TheMobileNavigator.vue'
import TheDekstopNavigation from '@/components/Routing/TheDesktopNavigation.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <div class="bodyContainer" @click="closeMenu">
    <div class="headerDesktop">
      <the-dekstop-navigation></the-dekstop-navigation>
    </div>
    <div class="headerMobile">
      <TheMobileNavigator
      :isOpen="isOpen"
      @toggleMenu="toggleMenu"
      ></TheMobileNavigator>
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
