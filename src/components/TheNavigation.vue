<script setup lang="ts">

</script>

<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/pricing">Pricing</router-link>
    <router-link to="/news">News</router-link>
  </div>
</template>

<style scoped>
  #nav .activeLink{
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
  }

</style>
