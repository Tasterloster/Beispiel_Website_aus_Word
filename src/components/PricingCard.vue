<script lang="ts">
export default {
  props: {
    paymentPlan: { type: Object, required: true },
    paymentInterval: {type: String, required: true},
  },
}
</script>

<template>
  <div class="card">
    <span class="card__text">
      <h1>
        {{ paymentPlan.name }}
      </h1>
      <h2>
        {{ paymentInterval==="monthly" ? paymentPlan.price_monthly : paymentPlan.price_yearly }}
      </h2>
      <ul class="featureText" v-for="feature in paymentPlan.features" :key="feature.id">
        <li>{{ feature.name }} - {{ feature.description }}</li>
      </ul>
    </span>
  </div>
</template>

<style scoped>
.card {
  border: #2c3e50 1px solid;
  max-width: 30%;
}

.card__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.featureText {
  padding: 0 2em;
}
</style>
