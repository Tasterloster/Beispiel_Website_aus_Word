<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import confetti from 'canvas-confetti'

const props = defineProps({
  questionAmount: Number,
  correctAnswersAmount: Number,
})

const emit = defineEmits<(e: string) => void>()
const performanceResult = ref()

if (props.correctAnswersAmount !== undefined && props.questionAmount !== undefined) {
  console.log(props.correctAnswersAmount, 'divided by')
  console.log(props.questionAmount, 'equals')
  performanceResult.value = Math.ceil((props.correctAnswersAmount / props.questionAmount) * 100)
  console.log(performanceResult.value, '%')
}

function tryAgain(): void {
  emit('tryAgain')
}

// Function to trigger the confetti side cannons
function handleClick() {
  const end = Date.now() + 3 * 1000 // 3 seconds
  const colors1 = ['#0000FF','#00FF00'] //blau-grün
  const colors2 = ['#FF0000', '#FFFF00'] //rot-gelb


  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors1,
    })

    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors2,
    })

    requestAnimationFrame(frame) // Keep calling the frame function
  }

  frame()
}

</script>

<template>
  <div class="container">
    <div class="passed results" v-if="performanceResult >= 50" @vue:mounted="() => handleClick()">
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
      <button class="tryAgain" @click="tryAgain">Try again</button>
    </div>
  </div>
</template>

<style scoped></style>
