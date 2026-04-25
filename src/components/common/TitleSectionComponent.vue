<script setup lang="ts">
import InteractiveComponent from '@/components/common/InteractiveComponent.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="title-section">
    <div class="gradient-line">
      <div class="gradient-circle"></div>
    </div>

    <div class="title-section__button">
      <InteractiveComponent tag="div" variant="primary">
        {{ title }}
      </InteractiveComponent>
    </div>
    <div class="gradient-line reverse">
      <div class="gradient-circle"></div>
    </div>
  </div>
</template>

<style scoped>
.title-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1em;
}
.title-section__button {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gradient-line {
  position: relative;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--color-white), var(--color-primary-1));
}

.gradient-circle {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-primary-1);
}
.reverse {
  transform: rotate(180deg);
}
</style>
