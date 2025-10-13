<script setup lang="ts">
import TheDesktopNavigation from '@/components/TheDesktopNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMobileNavigator from '@/components/TheMobileNavigator.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <div class="bodyContainer" @click="closeMenu">
    <div class="headerDesktop">
      <TheDesktopNavigation></TheDesktopNavigation>
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
