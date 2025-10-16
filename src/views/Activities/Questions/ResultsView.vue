<script setup lang="ts">
import { ref } from 'vue'
import ConfettiExplosion from "vue-confetti-explosion";

const props = defineProps({
  questionAmount: Number,
  correctAnswersAmount: Number,
})

const performanceResult = ref()

if (props.correctAnswersAmount !== undefined && props.questionAmount !== undefined) {
  console.log(props.correctAnswersAmount, 'divided by')
  console.log(props.questionAmount, 'equals')
  performanceResult.value = Math.ceil((props.correctAnswersAmount / props.questionAmount) * 100)
  console.log(performanceResult.value, '%')
}
</script>

<template>
  <div class="container">
    <div class="passed results" v-if="performanceResult >= 50">
      <ConfettiExplosion
      :duration="5000"
      :force="1"
      />
      <h1>Good work!</h1>
      <p>{{ performanceResult }}%</p>
      <p>Correctly answered questions: {{ correctAnswersAmount }}</p>
      <p>Amount of questions: {{ questionAmount }}</p>
    </div>
    <div class="failed results" v-if="performanceResult < 50">
      <h1>Try again!</h1>
      <p>{{ performanceResult }}%</p>
      <p>Correctly answered questions: {{ correctAnswersAmount }}</p>
      <p>Amount of questions: {{ questionAmount }}</p>
    </div>
  </div>
</template>

<style scoped></style>
