<script setup lang="ts">
import sourceData from '@/QuizItems.json'
import {dragAndDrop, useDragAndDrop} from '@formkit/drag-and-drop/vue'
const picturePath = '/images/quiz_images/quiz_2/'

type item = {
  name: string;
  id: number;
  imgName: string;
  type: string;
}

const items: item[] = sourceData.items
const tools: item[] =[]
const toys: item[] =[]


const [itemPool, ] = useDragAndDrop(items, {group: "dndQuiz"})

console.log(items)


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
          <div class="itemContainer">
            <img
              class="dndImg item"
              v-for="img in items"
              :key="img.id"
              :src="`${picturePath}${img.imgName}.jpg`"
              :alt="img.name"
            />
          </div>
        </div>
      </div>
      <div class="dropOffContainer">
        <div class="dropOffHeader">Gruppen</div>
        <div class="dropOffBody">
          <div class="dropOffZone answerOne tools">
            <p>Echte Werkzeuge</p>
          </div>
          <div class="dropOffZone answerTwo toys">
            <p>Spielzeuge</p>
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
  gap: .3em;
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
  gap: 2em;
  margin-top: 1em;
}
.itemContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3em;
}
.item {
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
