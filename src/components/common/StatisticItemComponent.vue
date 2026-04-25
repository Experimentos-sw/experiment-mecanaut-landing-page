<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="statistic-item">
    <div class="icon-container">
      <slot></slot>
    </div>
    <div class="text-container">
      <h2 class="statistic-title" :style="{ color: color }">{{ title }}</h2>
      <p class="statistic-subtitle" :style="{ color: color }">{{ subtitle }}</p>
    </div>
  </article>
</template>

<style scoped>
.statistic-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container {
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  width: 100%;
}

.statistic-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #333;
}

.statistic-subtitle {
  font-size: 0.95rem;
  color: #666;
  font-weight: 300;
  margin: 0;
}

@media (max-width: 768px) {
  .statistic-title {
    font-size: 1.25rem;
  }

  .statistic-subtitle {
    font-size: 0.875rem;
  }
}
</style>
