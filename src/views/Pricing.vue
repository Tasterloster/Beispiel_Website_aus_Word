<script lang="ts">
import sourceData from '@/data.json'
import PricingCard from '@/components/PricingCard.vue'
import SelectPaymentOption from '@/components/selectPaymentOption.vue'
export default {
  components: {
    SelectPaymentOption,
    PricingCard,
  },
  data() {
    return {
      paymentPlans: sourceData.paymentPlans,
      paymentInterval: 'monthly',
    }
  },
  setup() {
    return {
      paymentPlans: sourceData.paymentPlans,
    }
  },
  methods: {
    setPaymentInterval() {
      this.paymentInterval === 'yearly'
        ? (this.paymentInterval = 'monthly')
        : (this.paymentInterval = 'yearly')
    },
  },
}
</script>

<template>
    <section v-if="paymentPlans" class="paymentPlansBody">
      <div class="paymentsHeader">
        <h1>Pricing plans</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <p>Choose Payment option</p>
        <selectPaymentOption v-on:updatePaymentOption="setPaymentInterval" ></selectPaymentOption>
      </div>
      <section class="paymentOptions">
        <PricingCard
          v-for="paymentPlan in paymentPlans"
          :key="paymentPlan.id"
          :paymentPlan="paymentPlan"
          :payment-interval="paymentInterval"
        >
        </PricingCard>
      </section>
    </section>
</template>

<style scoped>
.paymentPlansBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
}

.paymentsHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.paymentOptions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
@media screen and (max-width: 531px) {
  .paymentOptions {
    flex-direction: column;
    gap: 2em;
  }
}
</style>
