<template>
  <div class="plan-card" :class="{ 'plan-card--dark': isDark }">
    <div class="plan-header">
      <h3 class="plan-title">{{ title }}</h3>
      <div class="plan-price">
        {{ price }}
        <span v-if="period" class="plan-period">{{ period }}</span>
      </div>
    </div>

    <div class="plan-features">
      <div v-for="(feature, index) in features" :key="index" class="feature-item">
        <div class="feature-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9"
              cy="9"
              r="8.5"
              :fill="isDark ? 'white' : 'var(--color-primary-1)'"
              fill-opacity="0.15"
              :stroke="isDark ? 'white' : 'var(--color-primary-1)'"
            />
            <path
              d="M6 9L8 11L12 7"
              :stroke="isDark ? 'white' : 'var(--color-primary-1)'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="feature-text">{{ feature }}</div>
      </div>
    </div>

    <div class="plan-action">
      <button 
      target="_blank"
        class="action-button" 
        :class="{ 'action-button--dark': isDark }" 
        @click="redirectToRegister"
      >
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  price: string
  period?: string
  features: string[]
  actionText: string
  isDark?: boolean
}

withDefaults(defineProps<Props>(), {
  actionText: 'Acceder',
  isDark: false,
  period: '',
})

const redirectToRegister = () => {
  window.open('https://agreeable-glacier-01474611e.6.azurestaticapps.net/registrar', '_blank')
}
</script>
  
  <style scoped>
  .plan-card {
    width: 100%;
    max-width: 300px;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 20px 1px rgba(0, 0, 0, 0.155);
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: all 0.3s ease;
    position: relative;
    top: 0;
  }
  
  .plan-card:hover {
    box-shadow: 0 25px 25px 1px rgba(138, 112, 214, 0.25);
    transform: translateY(-7px);
  }
  
  .plan-card--dark {
    background-color: var(--color-primary-1);
    color: white;
  }
  
  .plan-card--dark:hover {
    background-color: var(--color-primary-2);
    box-shadow: 0 25px 25px 1px rgba(138, 112, 214, 0.35);
  }
  
  .plan-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
  }
  
  .plan-title {
    font-size: 1em;
    font-weight: 600;
    color: var(--color-primary-1);
    margin: 0;
    transition: all 0.3s ease;
  }
  
  .plan-card:hover .plan-title {
    transform: scale(1.03);
  }
  
  .plan-card--dark .plan-title {
    color: white;
  }
  
  .plan-price {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--color-primary-1);
    transition: all 0.3s ease;
    display: flex;
    align-items: baseline;
    gap: 5px;
  }
  
  .plan-period {
    font-size: 0.5em;
    font-weight: 400;
    opacity: 0.8;
    color: var(--color-primary-5);
    font-weight: 700;
  }
  
  .plan-card:hover .plan-price {
    transform: translateY(-2px);
  }
  
  .plan-card--dark .plan-price {
    color: white;
  }
  
  .plan-features {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 25px;
  }
  
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  
  .feature-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .feature-text {
    font-size: 0.9em;
    line-height: 1.4;
    color: #555;
  }
  
  .plan-card--dark .feature-text {
    color: white;
  }
  
  .plan-action {
    margin-top: auto;
  }
  
  .action-button {
    width: 100%;
    padding: 12px 0;
    background-color: transparent;
    border: 1.5px solid var(--color-primary-1);
    border-radius: 50px;
    color: var(--color-primary-1);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .action-button:hover {
    background-color: var(--color-primary-1);
    color: white;
    transform: translateY(-2px);
  }
  
  .action-button--dark {
    border-color: white;
    color: white;
  }
  
  .action-button--dark:hover {
    background-color: white;
    color: var(--color-primary-1);
  }
  
  .feature-icon svg {
    transition: transform 0.3s ease;
  }
  
  .plan-card:hover .feature-icon svg {
    transform: scale(1.1);
  }
  </style>
  