<template>
    <div class="maintenance-card" :style="cardStyle">
      <div class="overlay">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const props = defineProps({
    title: {
      type: String,
      default: 'Preventivo',
    },
    description: {
      type: String,
      default: 'Planifica y programa revisiones rutinarias para evitar fallas imprevistas.',
    },
    backgroundImage: {
      type: String,
      default: '',
    },
  })
  
  const cardStyle = computed(() => {
    return {
      backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
      backgroundColor: props.backgroundImage ? 'transparent' : '#6c5ce7',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  })
  </script>
  
  <style scoped>
  .maintenance-card {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 10px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .maintenance-card:hover {
    transform: translateY(-5px);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(76, 57, 142, 0.7), rgba(76, 57, 142, 0.9));
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .title {
    color: var(--color-white);
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .description {
    color: var(--color-white);
    font-size: 0.9em;
    margin: 0;
  }
  </style>
  