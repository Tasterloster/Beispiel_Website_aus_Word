<script setup lang="ts">
import sourceData from '@/quiz-items.json'
import { useDraggable } from 'vue-draggable-plus'
import { computed, ref } from 'vue'
import type { item } from '@/views/Activities/Questions/DragAndDropQuiz/ItemInterface.ts'
import { checkDone } from '@/views/Activities/Questions/DragAndDropQuiz/DragAndDropUtils.ts'

const picturePath = '/images/quiz_images/quiz_2/'

const emit = defineEmits<(e: 'done', result: boolean) => void>()

const items = ref(sourceData.items)
const tools = ref<item[]>([])
const toys = ref<item[]>([])
const itemListBody = ref()
const itemDropZoneOne = ref()
const itemDropZoneTwo = ref()

useDraggable(itemListBody, items, {
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

const answer = ref(sourceData.items)

const toolsAnswer = ref(answer.value.filter((t) => t.type === 'tool'))
const toysAnswer = ref(answer.value.filter((t) => t.type === 'toy'))
const questionStarted = computed(() => {
  return tools.value.length > 0 || toys.value.length > 0
})

function done() {
  if(questionStarted.value) {
    emit('done', checkDone(tools, toolsAnswer, toys, toysAnswer))
    console.log('done', checkDone(tools, toolsAnswer, toys, toysAnswer))
  }
  else{
    window.alert('Please move the Pictures into the correct boxes')
  }
}
</script>

<template>
  <div class="dragAndDropQuiz">
    <div class="question">
      <h2>Match the items to the group</h2>
    </div>
    <div class="dragAndDropHeader">
      <h1 id="leftSideHeader">Itempool</h1>
      <h1 id="rightSideHeader">Groups</h1>
    </div>
    <div class="secondaryHeading">
      <p>Tools</p>
      <p>Toys</p>
    </div>
    <div class="dragAndDropBody">
      <div class="itemListContainer">
        <div ref="itemListBody" class="itemListBody dropZone">
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
        <div class="dropOffBody">
          <div ref="itemDropZoneOne" class="dropOffZone answerOne tools dropZone">
            <img
              class="dndImg item"
              v-for="tool in tools"
              :key="tool.id"
              :src="`${picturePath}${tool.imgName}.jpg`"
              :alt="tool.name"
            />
          </div>
          <div ref="itemDropZoneTwo" class="dropOffZone answerTwo toys dropZone">
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
    <div class="submitArea">
      <button class="submit" @click="done">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.dragAndDropQuiz {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.question {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.dragAndDropHeader {
  display: grid;
  grid-column: 1 / 3;
  justify-items: center;
  align-items: center;
  #leftSideHeader {
    grid-column: 1 / 2;
  }
  #rightSideHeader {
    grid-column: 2 / 3;
  }
}

.secondaryHeading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 5em;
  column-gap: 5em;
  grid-column: 2 / 3;
  justify-content: center;
  align-items: center;
  min-height: 4em;
  :first-child {
    grid-column: 1 / 2;
  }
  :last-child {
    grid-column: 2 / 3;
  }
}

.dragAndDropBody {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / 3;
  min-height: 639px;
  gap: 1em;
}

.itemListContainer {
  grid-column: 1 / 2;
}

.itemListBody {
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3em;
  background-color: white;
  width: 100%;
  height: 100%;
}

.dropZone {
  padding: 1em;
  display: grid;
  height: 100%;
}

.dndImg {
  width: 200px;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-color: white;
  border: 1px solid var(--vt-c-indigo);
}

.dropOffContainer {
  grid-column: 2 / 3;
}

.dropOffBody {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 100%;
}

.dropOffZone {
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 0.3em;
}

.submitArea {
  grid-column: 1 / 3;
}
</style>
