<script setup lang="ts">
import sourceData from '@/quiz-items.json'
import { useDraggable } from 'vue-draggable-plus'
import { type Ref, ref } from 'vue'


const picturePath = '/images/quiz_images/quiz_2/'

type item = {
  name: string
  id: number
  imgName: string
  type: string
}
const items = ref(sourceData.items)
const tools = ref<item[]>([])
const toys = ref<item[]>([])
const itemPool = ref()
const itemDropZoneOne = ref()
const itemDropZoneTwo = ref()

console.log('items: ', items)
console.log('tools: ', tools)
console.log('toys: ', toys)

useDraggable(itemPool, items, {
  animation: 150,
  ghostClass: 'ghost',
  group: 'people',
  onUpdate: () => {
    console.log('update items')
  },
  onAdd: () => {
    console.log('add items')
  },
  remove: () => {
    console.log('remove items')
  },
})
useDraggable(itemDropZoneOne, tools, {
  animation: 150,
  ghostClass: 'ghost',
  group: 'people',
  onUpdate: () => {
    console.log('update tools')
  },
  onAdd: () => {
    console.log('add tools')
  },
  remove: () => {
    console.log('remove tools')
  },
})
useDraggable(itemDropZoneTwo, toys, {
  animation: 150,
  ghostClass: 'ghost',
  group: 'people',
  onUpdate: () => {
    console.log('update toys')
  },
  onAdd: () => {
    console.log('add toys')
  },
  remove: () => {
    console.log('remove toys')
  },
})
</script>

<template>
  <div class="quizContainer">
    <div class="quizHeader">
    </div>
    <div class="dragAnDropQuiz">
      <div class="itemAreaContainer">
        <div class="itemHeader">Itempool</div>
        <div ref="itemPool" class="itemPool">
          <img
            class="dndImg item"
            v-for="img in items"
            :key="img.id"
            :src="`${picturePath}${img.imgName}.jpg`"
            :alt="img.name"
          />
        </div>
      </div>
      <div class="dropOffContainer">
        <div class="dropOffHeader">Gruppen</div>
        <div class="dropOffBody">
          <p>Werkzeuge</p>

          <div ref="itemDropZoneOne" class="dropOffZone answerOne tools">
            <img
              class="dndImg item"
              v-for="tool in tools"
              :key="tool.id"
              :src="`${picturePath}${tool.imgName}.jpg`"
              :alt="tool.name"
            />
          </div>
          <p>Spielzeuge</p>

          <div ref="itemDropZoneTwo" class="dropOffZone answerTwo toys">
            <img
              class="dndImg item"
              v-for="toy in toys"
              :key="toy.id"
              :src="`${picturePath}${toy.imgName}.jpg`"
              :alt="toy.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quizContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dragAnDropQuiz {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  box-sizing: border-box;
  &:first-child {
    flex: 2 1 0;
  }
  &:nth-child(2) {
    flex: 1 1 0;
  }
}

.itemAreaContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}
.itemHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.itemPool {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3em;
  margin-top: 1em;
  padding: 1em;
  background-color: white;
  width: 100%;
}

.dndImg {
  width: 200px;
  height: 200px;
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
  background-color: white;
  border: 1px solid var(--vt-c-indigo);
}

.dropOffContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 50%;
  width: 100%;
}

.dropOffHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dropOffBody {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1em;
  margin-top: 1em;
  width: 100%;
}

.dropOffZone {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
