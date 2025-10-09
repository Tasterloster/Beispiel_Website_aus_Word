<script setup lang="ts">
const props = defineProps({
  person: { type: Object , required: true },
})
</script>

<template>
  <div class="staffCard">
    <p>{{props.person.text}}</p>
    <div class="staffCard__info">
      <img class="profilePic" :src="`images/staff_images/${props.person.name}.jpg`" :alt="`${props.person.name}`"/>
      <div class="staffCard__text">
        <h2>{{props.person.name}}</h2>
        <p>their motto: {{props.person.motto}}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.staffCard{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #2c3e50;
  border-radius: 25px;
  max-width: 30%;
  height: fit-content;
  margin-bottom: 0;
  padding: 1em;
  gap: 1em;
  box-sizing: border-box;
  justify-content: center;
}

.staffCard__info{
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: center;
  align-items: center;
}
.profilePic{
  border: 1px solid #2c3e50;
  object-fit: cover;
  width: 8em;
  height:  8em;
  border-radius: 35%;
}
.staffCard:hover {
  box-shadow: 0 0 3px 1px rgba(0, 140, 186, 0.5);
}
</style>