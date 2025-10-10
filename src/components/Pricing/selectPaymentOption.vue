<script lang="ts">
export default {
  emits: ['updatePaymentOption', 'monthly', 'yearly'],
}
</script>

<template>
  <div class="segmented-toggle">
    <span class="track">
      <label for="monthly" class="option"
        >Monthly<input
          type="radio"
          id="monthly"
          checked="checked"
          name="paymentOption"
          value="monthly"
          @click="$emit('updatePaymentOption', 'monthly')"
        />
      </label>
      <label for="yearly" class="option"
        >Yearly<input
          type="radio"
          id="yearly"
          name="paymentOption"
          value="yearly"
          @click="$emit('updatePaymentOption', 'yearly')"
      /></label>
    </span>
  </div>
</template>

<style scoped>

.option{
  padding: 10px;
  text-align: center;
  cursor: pointer;

}

.track {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #bdbdbd;
  overflow: hidden;
  user-select: none;
  font-weight: 600;
  font-size: 14px;
}

input[type="radio"]{
  opacity: 0;
  width: 0;
  height: 0;

}

.option:has(>input:checked){
  background: #2c3e50;
  color: white;
}
</style>
