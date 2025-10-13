<script setup lang="ts">
import sourceDataRaw from '@/routing-data.json'
import { ref } from 'vue'
const headerMobileRoutes = ref(sourceDataRaw.header.routes)

defineEmits(['toggleMenu'])

defineProps({
  isOpen: Boolean
})
</script>

<template>
  <div class="row">
    <button
      class="hamburg"
      :class="{ checked: isOpen }"
      @click.stop="$emit('toggleMenu')"
      aria-label="Menü öffnen/schließen"
      :aria-expanded="isOpen.toString()"
      aria-controls="mobile"
      type="button"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
  </div>

  <nav id="mobile" v-if="isOpen">
    <RouterLink
      class="navLink"
      v-for="route in headerMobileRoutes"
      :key="route.id"
      :to="route.path"
      @click.stop="$emit('toggleMenu')"
    >
      {{ route.text }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.hamburg {
  appearance: none;
  border: 0;
  background: var(--vt-c-indigo);
  width: 75px; height: 54px;
  position: relative;
  margin-left: auto; margin-right: auto;
  transition: border-radius .5s;
  cursor: pointer;
  padding: 0;
}

.line {
  position: absolute;
  left: 10px;
  height: 4px; width: 55px;
  background: #fff;
  display: block;
  transition: 0.5s;
  transform-origin: center;
}
.line:nth-child(1) { top: 12px; }
.line:nth-child(2) { top: 24px; }
.line:nth-child(3) { top: 36px; }

.hamburg.checked .line:nth-child(1) {
  transform: scale(0.8) translateY(12px) rotate(-45deg);
}
.hamburg.checked .line:nth-child(2) {
  opacity: 0;
}
.hamburg.checked .line:nth-child(3) {
  transform: scale(0.8) translateY(-17px)  rotate(45deg);
}
</style>
