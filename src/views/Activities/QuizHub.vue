<script setup lang="ts">
import DragAndDrop from '@/views/Activities/Questions/DragAndDrop.vue'
import MultipleChoice from '@/views/Activities/Questions/MultipleChoice.vue'
import { ref } from 'vue'

const answers: Record<number, string> = {
  1: '7',
}

const correctAnswersAmount = ref(0)
const currentQuestion = ref(1)

function checkAnswer(a: boolean) {
  if (a) correctAnswersAmount.value += 1
  currentQuestion.value +=1
}
</script>

<template>
  <h1>HOWDY!</h1>
  <h2 id="answerFloat">Correct Answers: {{ correctAnswersAmount }}</h2>
  <p>Question 1:</p>
  <multiple-choice
    @done="checkAnswer"
    v-if="currentQuestion===0"
  ></multiple-choice>
  <p>Question 2:</p>
  <drag-and-drop
    v-if="currentQuestion===1"
  ></drag-and-drop>
</template>

<style scoped>
#answerFloat{
  position: absolute;
  top: 7.5em;
  right: 4em;
}
</style>
