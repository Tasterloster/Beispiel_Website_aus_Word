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
      <ul class="featureText" >
        <li v-for="feature in paymentPlan.features" :key="feature.id">{{ feature.name }} - {{ feature.description }}</li>
      </ul>
    </span>
  </div>
</template>

<style scoped>
.card {
  border: #2c3e50 1px solid;
  max-width: 30%;
  background-color: rgba(44, 62, 80,0.1);

}

.card:hover {
  transform: scale(1.05);
  background-color: rgba(44, 62, 80, 1);
  color: #F7FBFF;
  border: 1px solid #F7FBFF;

}

.card__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

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

@media (max-width: 831px) {
  .card {
    width: 50%;
    max-width: 45%;
  }
}

@media (max-width: 531px) {
  .card {
    width: 100%;
    max-width: 100%;
  }
}

</style>
