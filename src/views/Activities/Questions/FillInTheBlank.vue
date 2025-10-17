<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<(e: 'done', result: boolean) => void>()

const answer = ref<string[]>([])
const correctAnswer = ref<string[]>([
  'correct choice',
  'correct choice',
  'correct choice',
  'correct choice',
])
const result = ref(false)

function done() {
  if (answer.value.length === correctAnswer.value.length) {
    if (JSON.stringify(answer.value ) === JSON.stringify(correctAnswer.value) ) result.value = true
  }
  emit('done', result.value)
  console.log('done', result.value)
}
</script>

<template>
  <div class="quizContainer">
    <div class="question">
      <h2>Please select the correct answer from the dropdown</h2>
    </div>
    <form @submit.prevent="done">
      <p>
        Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod invidunt ut
        <select v-model="answer[0]" :required="true">
          <option>correct choice</option>
          <option>wrong</option>
          <option>wrong!</option>
          <option>WRONG!</option>
        </select>
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum.
      </p>

      <p>
        Stet clita kasd gubergren,
        <select v-model="answer[1]" :required="true">
          <option>correct choice</option>
          <option>wrong</option>
          <option>wrong!</option>
          <option>WRONG!</option>
        </select>
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        <select v-model="answer[2]" :required="true">
          <option>correct choice</option>
          <option>wrong</option>
          <option>wrong!</option>
          <option>WRONG!</option>
        </select>
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>

      <p>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est
        <select v-model="answer[3]" :required="true">
          <option>correct choice</option>
          <option>wrong</option>
          <option>wrong!</option>
          <option>WRONG!</option>
        </select>
        Lorem ipsum dolor sit amet.
      </p>
      <div class="submitArea">
        <button type="submit" class="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.question{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
