<script  lang="ts">
export default {
  emits: ['updatePaymentOption'],
}
</script>

<template>
  <label class="segmented-toggle">
    <input type="checkbox" @click="$emit('updatePaymentOption')" aria-label="Billing cycle (unchecked = Monthly, checked = Yearly)" />
    <span class="track">
      <span class="option">Monthly</span>
      <span class="option">Yearly</span>
      <span class="thumb" aria-hidden="true"></span>
    </span>
  </label>
</template>

<style scoped>
.segmented-toggle {
  position: relative;
  display: inline-block;
}

/* Das eigentliche Klickziel ist die ganze Fläche */
.segmented-toggle > input {
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
  z-index: 3; /* über dem Track */
}

/* Track mit zwei Spalten */
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

/* Optionen (Text) */
.option {
  padding: 10px 16px;
  text-align: center;
  z-index: 2; /* über der Thumb-Fläche */
  color: #666;
}

/* Der dunkle „Slider“, der unter die aktive Option fährt */
.thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;   /* genau eine Spalte breit */
  height: 100%;
  background: #2c3e50;
  transition: transform .25s ease;
  z-index: 1;
}

/* Zustand: unchecked = Monthly aktiv */
.segmented-toggle > input:not(:checked) + .track .option:first-child { color: #fff; }

/* Zustand: checked = Yearly aktiv */
.segmented-toggle > input:checked + .track .thumb { transform: translateX(100%); }
/* aktiv = Yearly */
.segmented-toggle > input:checked + .track > .option:nth-child(2) {
  color: #fff;
}

/* Optional: kleine Hover/Focus Details */
.segmented-toggle > input:focus-visible + .track {
  outline: 2px solid #6aa9ff;
  outline-offset: 2px;
}
.track .option:hover { background: #f6f6f6; }
</style>
