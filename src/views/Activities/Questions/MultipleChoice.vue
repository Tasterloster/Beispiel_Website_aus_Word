<script setup lang="ts">
import { ref } from 'vue'

const emit =
  defineEmits<
    (
      e: 'done',
      result: boolean,
    ) => void
  >()

const answer = ref('')
const result = ref(false)
const correctAnswer = '7'

function done() {
  if(answer.value === correctAnswer) result.value = true
  emit('done', result.value)
}
</script>

<template>
  <div class="quizContainer">
    <form id="quizQuestionMultipleChoice" @submit.prevent="done">
      <div class="question">
        <p>How many Days are in a week?</p>
      </div>
      <div class="answer">
        <input
          type="radio"
          id="questionOneAnswerOne"
          value="3"
          name="questionOne"
          v-model="answer"
        />
        <label for="questionOneAnswerOne">3 Days</label>
      </div>
      <div class="answer">
        <input
          type="radio"
          id="questionOneAnswerTwo"
          value="5"
          name="questionOne"
          v-model="answer"
        />
        <label for="questionOneAnswerTwo">5 Days</label>
      </div>
      <div class="answer">
        <input
          type="radio"
          id="questionOneAnswerThree"
          value="7"
          name="questionOne"
          v-model="answer"
        />
        <label for="questionOneAnswerThree">7 Days</label>
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#quizQuestionMultipleChoice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.answer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
}

input[type='radio'] {
  box-sizing: border-box;
  appearance: none;
  background: var(--vt-c-white-normal);
  outline: 2px solid var(--vt-c-indigo);
  border: 3px solid white;
  width: 16px;
  height: 16px;
  &:checked {
    background: var(--vt-c-indigo);
  }
}

.submit {
  margin-top: 2em;
}
</style>
