<script setup lang="ts">
import DragAndDrop from '@/views/Activities/Questions/DragAndDropQuiz/DragAndDrop.vue'
import MultipleChoice from '@/views/Activities/Questions/MultipleChoice.vue'
import { ref } from 'vue'
import FillInTheBlank from '@/views/Activities/Questions/FillInTheBlank.vue'
import ResultsView from '@/views/Activities/Questions/ResultsView.vue'

const correctAnswersAmount = ref(0)
const currentQuestion = ref(0)
const questionAmount = ref(3)

function checkAnswer(a: boolean) {
  if (a) correctAnswersAmount.value += 1
  currentQuestion.value +=1
}
</script>

<template>
  <h1>HOWDY!</h1>
  <div class="questionHeader">
    <p>Question 1:</p><p v-if="currentQuestion>0">✅</p>
  </div>
  <multiple-choice
    @done="checkAnswer"
    v-if="currentQuestion===0"
  ></multiple-choice>
  <div class="questionHeader">
    <p>Question 2:</p><p v-if="currentQuestion>1">✅</p>
  </div>
  <drag-and-drop
    @done="checkAnswer"
    v-if="currentQuestion===1"
  ></drag-and-drop>
  <div class="questionHeader">
    <p>Question 3:</p><p v-if="currentQuestion>2">✅</p>
  </div>
  <fill-in-the-blank
    @done="checkAnswer"
    v-if="currentQuestion===2"
  ></fill-in-the-blank>
  <resultsView
    v-if="currentQuestion===3"
    :correct-answers-amount="correctAnswersAmount"
    :question-amount="questionAmount"
  >
  </resultsView>
</template>

<style scoped>
</style>
