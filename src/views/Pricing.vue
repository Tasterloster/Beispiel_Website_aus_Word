<script lang="ts">
import sourceData from '@/data.json'
import PricingCard from '@/components/PricingCard.vue'
export default {
  components: {
    PricingCard,
  },
  data() {
    return {
      paymentPlans: sourceData.paymentPlans,
    }
  },
  setup() {
    return {
      paymentPlans: sourceData.paymentPlans,
    }
  },
}
</script>

<template>
  <div>
    <section v-if="paymentPlans" class="paymentPlansBody">
      <h1>Pricing plans</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
      <button>Monthly/Yearly</button>
      <section class="paymentOptions">
        <div class="paymentPlanCard">
          <PricingCard
            v-for="paymentPlan in paymentPlans"
            :key="paymentPlan.id"
            :paymentPlan="paymentPlan"
          >
          </PricingCard>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.paymentPlansBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
}

.paymentOptions {

}
</style>
