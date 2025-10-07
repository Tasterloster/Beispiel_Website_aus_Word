<script lang="ts">
export default {
  props: {
    paymentPlan: { type: Object, required: true },
    paymentInterval: { type: String, required: true },
  },
  computed: {
    paymentText() {
      return this.paymentInterval === 'monthly'
        ? this.paymentPlan.price_monthly
        : Math.round(parseInt(this.paymentPlan.price_yearly) / 12)
    },
  },
}
</script>

<template>
  <div class="card">
    <span class="card__text">
      <h1>
        {{ paymentPlan.name }}
      </h1>
      <div>
        <h2>$</h2>
        <h2>
          {{ paymentText }}
        </h2>
        <p>/mo</p>
      </div>
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
.card__text > div {
  display: inline-flex;
  flex-direction: row;
  height: fit-content;
  align-items: baseline;
}

@media screen and (max-width: 531px) {
  .card {
    border: #2c3e50 1px solid;
    max-width: 100%;
    width: 100%;
    position: relative;
  }
}
</style>
