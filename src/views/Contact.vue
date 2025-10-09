<script setup lang="ts">
import { ref } from 'vue'
const topic = ref("topic")
</script>

<template>
  <h1>Howdy!</h1>
  <form class="contactUs">
    <input type="text" placeholder="First Name" required />
    <input type="text" placeholder="Last Name" required />
    <input type="text" placeholder="Email" required />
    <select v-model="topic">
      <option disabled>topic</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <input type="password" placeholder="Password" required />
    <button type="submit">Submit</button>
    <button type="reset">reset</button>
  </form>
</template>

<style scoped></style>
