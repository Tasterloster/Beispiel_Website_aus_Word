<script setup lang="ts">
import { ref } from 'vue'
import ModalPopup from '@/components/ModalPopup.vue'

const userData = ref({
  firstName: '',
  lastName: '',
  topic: 'topic',
  other: '',
  organisation: '',
  message: '',
})

const modalOpen = ref(false)

function sendData() {
  console.log(userData)
  modalOpen.value = true
  setTimeout(() =>{
    modalOpen.value = false
    userData.value.firstName="";
    userData.value.lastName="";
    userData.value.topic="topic";
    userData.value.other="";
    userData.value.organisation="";
    userData.value.message="";
  },5000)
}

</script>

<template>
  <h1>Contact form</h1>
  <form class="contactUs" name="contactUs" @submit="sendData()">
    <input name="firstname" type="text" placeholder="First Name" v-model="userData.firstName" required />
    <input name="lastname" type="text" placeholder="Last Name" v-model="userData.lastName" required />
    <select v-model="userData.topic" name="topic" >
      <option value="topic" disabled>{{userData.topic}}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="other">Other</option>
    </select>
    <input
      name="topicOther"
      v-if="userData.topic === 'other'"
      type="text"
      placeholder="Other"
      v-model="userData.other"
    />
    <input name="organisation" type="text" placeholder="Organisation" v-model="userData.organisation" />
    <textarea name="message" v-model="userData.message" placeholder="message" required />
    <button name="submitBtn" type="submit">Submit</button>
    <button name="resetBtn" type="reset">Reset</button>
  </form>
  <modal-popup class="successPopup" v-model="modalOpen">
    <template v-slot:content_header>
      <h2>success!</h2>
    </template>
  </modal-popup>
</template>

<style scoped>
textarea {
  resize: none;
}

input:user-invalid {
  outline: red solid 1px;
}
textarea:user-invalid {
  outline: red solid 1px;
}

.contactUs{
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
}
input[name=firstname]{
  grid-column: 1 / span 1;
}
input[name=lastname]{
  grid-column: 2 / span 1;
}
select[name=topic]{
  grid-column: 1 / span 1;
}
input[name=topicOther]{
  grid-column: 2 / span 1;
}
input[name=organisation]{
  grid-column: 1 / span 1;
}
textarea[name=message]{
  grid-column: 1 / span 2;
  grid-row: 4 / span 10;
}
button[name=submitBtn]{
  grid-column: 1 / span 1;
}
button[name=resetBtn]{
  grid-column: 2 / span 1;
}
</style>
