<script setup lang="ts">
import sourceData from '@/QuizItems.json'
import {dragAndDrop, useDragAndDrop} from '@formkit/drag-and-drop/vue'
const picturePath = '/images/quiz_images/quiz_2/'


const [itemPool, items] =
  useDragAndDrop(sourceData.items, {group: "dndQuiz"})
const [itemDropZoneOne, tools] =
  useDragAndDrop([], {group: "dndQuiz"})
const [itemDropZoneTwo, toys] =
  useDragAndDrop([], {group: "dndQuiz"})

console.log('items: ', items.value)
console.log('tools: ', tools.value)
console.log('toys: ', toys.value)


</script>

<template>
  <div class="quizContainer">
    <div class="quizHeader">
      <h1>Ordnen Sie die Items den Gruppen zu</h1>
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
          <div
            ref="itemDropZoneOne"
            class="dropOffZone answerOne tools">
            <p>Werkzeuge</p>
<!--            <template v-for="tool in tools">-->
<!--              {{tool}}-->
<!--            </template>-->
            <img
              class="dndImg item"
              v-for="tool in tools"
              :key="tool.id"
              :src="`${picturePath}${tool.imgName}.jpg`"
              :alt="tool.name"
            >
          </div>
          <div
            ref="itemDropZoneTwo"
            class="dropOffZone answerTwo toys">
            <p>Spielzeuge</p>
            <img
              class="dndImg item"
              v-for="toy in toys"
              :key="toy.id"
              :src="`${picturePath}${toy.imgName}.jpg`"
              :alt="toy.name"
              >
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
  gap: .3em;
  margin-top: 1em;
  padding: 1em;
  background-color: white;
  width: 100%;
}

.dndImg {
  width: 200px;
  height: 200px;
  max-width: 75%;
  max-height: 75%;
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
