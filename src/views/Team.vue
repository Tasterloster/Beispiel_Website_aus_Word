<script setup lang="ts">

import sourceData from '@/staff-data.json'
import StaffCard from '@/components/Team/StaffCard.vue'
const staff = sourceData.staffs

</script>

<template>
  <h1>Our Team!</h1>
  <div class="teamContainer">
    <staff-card
      v-for="prs in staff"
      :key="prs.id"
      :person="prs"
    >
    </staff-card>
  </div>
</template>

<style scoped>

.teamContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
