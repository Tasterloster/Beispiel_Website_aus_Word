<script setup lang="ts">

import sourceData from '@/staff-data.json'
import StaffCard from '@/components/StaffCard.vue'
const staff = sourceData.staffs

</script>

<template>
<div class="teamPageContainer">
  <h1>Our Team!</h1>
  <div class="teamContainer">
    <staff-card
      v-for="prs in staff"
      :key="prs.id"
      :person="prs"
    >
    </staff-card>
  </div>
</div>

</template>

<style scoped>
.teamPageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.teamContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
