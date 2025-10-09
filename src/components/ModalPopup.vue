<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import type { PropType } from 'vue'
import type { NewsInterface } from '@/components/News/NewsInterface.ts'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  news: { type: Object as PropType<NewsInterface | null>, default: null },
})
const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => globalThis.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => globalThis.removeEventListener('keydown', onKeydown))
</script>
<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="overlay"
      aria-modal="true"
      aria-label="News-Details"
      @click.self="close"
    >
      <div class="dialog">
        <button class="closeBtn" @click="close" aria-label="Close">✕</button>
        <div class="dialog__content">
          <slot name="content_image"></slot>
          <slot name="content_header"></slot>
          <div class="dialog__text">
            <slot name="content_text"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.55); /* abdunkeln */
  z-index: 999;
}

.dialog {
  max-width: 900px;
  width: min(90vw, 900px);
  max-height: 90vh;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  padding: 1.25rem;
  position: relative; /* für Close-Button */
  overflow-y: scroll;
}

.dialog__content {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
}
.dialog__content > img {
  width: min(50%, 320px);
  height: auto;
  border-radius: 10px;
  border: 1px solid #2c3e50;
}

.closeBtn {
  position: absolute;
  top: 10px;
  right: 14px;
  border: 0;
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
