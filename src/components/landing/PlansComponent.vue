<template>
  <section class="plans-section">
    <TitleSectionComponent :title="$t('plans.title')" />
    <div class="plans-container">
      <h2 class="plans-title">{{ $t('plans.subtitle') }}</h2>
      <!-- Selector de período -->
      <div class="period-selector">
        <button
          class="period-button"
          :class="{ 'period-button--active': selectedPeriod === 'monthly' }"
          @click="selectedPeriod = 'monthly'"
        >
          {{ t('plans.monthly') }}
        </button>
        <button
          class="period-button"
          :class="{ 'period-button--active': selectedPeriod === 'yearly' }"
          @click="selectedPeriod = 'yearly'"
        >
        {{ t('plans.yearly') }} <span class="discount-badge">-{{ discountPercentage }}%</span>
        </button>
      </div>

      <!-- Contenedor de planes -->
      <div class="plans-grid">
        <!-- Plan Gratuito -->
        <div class="plan-card-container">
          <PlanItemComponent
            :title="freePlan.title"
            :price="freePlanPrice"
            :features="freePlan.features"
            :actionText="actionText"
          />
          <div class="robot-image robot-image--free">
            <img src="@/assets/images/logo-v3.svg" alt="Robot" />
          </div>
        </div>

        <!-- Plan Corporativo con su robot -->
        <div class="plan-wrapper plan-wrapper--featured">
          <PlanItemComponent
            :title="corporatePlan.title"
            :price="getPrice(corporatePlan)"
            :period="selectedPeriod === 'monthly' ? t('plans.time.monthly') : t('plans.time.yearly')"
            :features="corporatePlan.features"
            :actionText="actionText"
            :isDark="true"
          />
          <div class="robot-image robot-image--featured">
            <img src="@/assets/images/logo-v1.svg" alt="Robot" />
          </div>
        </div>

        <!-- Plan Profesional con su robot -->
        <div class="plan-wrapper plan-wrapper--pro">
          <PlanItemComponent
            :title="professionalPlan.title"
            :price="getPrice(professionalPlan)"
            :period="selectedPeriod === 'monthly' ? t('plans.time.monthly') : t('plans.time.yearly')"
            :features="professionalPlan.features"
            :actionText="actionText"
          />
          <div class="robot-image robot-image--pro">
            <img src="@/assets/images/logo-v2.svg" alt="Robot" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TitleSectionComponent from '@/components/common/TitleSectionComponent.vue'
import PlanItemComponent from '@/components/common/PlanItemComponent.vue'
import { formatPrice } from '@/utils/formatPrice'

interface PlanPricing {
  monthly: number
  yearly: number
}

interface Plan {
  title: string
  pricing: PlanPricing
  features: string[]
}

const { t } = useI18n()
const selectedPeriod = ref('monthly')
const actionText = computed(() => t('plans.cta'))
const discountPercentage = 20

const freePlan = computed(() => ({
  title: t('plans.free.title'),
  pricing: {
    monthly: 0,
    yearly: 0,
  },
  features: [
    t('plans.free.features.0'),
    t('plans.free.features.1'),
    t('plans.free.features.2'),
    t('plans.free.features.3'),
  ],
}))

const professionalPlan = computed(() => ({
  title: t('plans.professional.title'),
  pricing: {
    monthly: 15,
    yearly: 144,
  },
  features: [
    t('plans.professional.features.0'),
    t('plans.professional.features.1'),
    t('plans.professional.features.2'),
    t('plans.professional.features.3'),
    t('plans.professional.features.4'),
    t('plans.professional.features.5'),
    t('plans.professional.features.6'),
  ],
}))

const corporatePlan = computed(() => ({
  title: t('plans.corporate.title'),
  pricing: {
    monthly: 30,
    yearly: 288,
  },
  features: [
    t('plans.corporate.features.0'),
    t('plans.corporate.features.1'),
    t('plans.corporate.features.2'),
    t('plans.corporate.features.3'),
    t('plans.corporate.features.4'),
  ],
}))

const freePlanPrice = computed(() => formatPrice(freePlan.value.pricing.monthly))

const getPrice = (plan: Plan): string => {
  const price = selectedPeriod.value === 'monthly' ? plan.pricing.monthly : plan.pricing.yearly
  return formatPrice(price)
}
</script>
  
  <style scoped>
  .plans-section {
    padding: 4em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .plans-title {
    background: linear-gradient(to right, var(--color-primary-1), var(--color-primary-2));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.6em;
    font-weight: 700;
  }
  
  .plans-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: #f5f3ff;
    margin-top: 2em;
    border-radius: 1em;
    width: 100%;
    max-width: 1200px;
    box-shadow: 0 10px 30px rgba(138, 112, 214, 0.1);
  }
  
  .plan-card-container {
    position: relative;
  }
  .plan-wrapper--pro {
    position: relative;
  }
  
  .period-selector {
    display: flex;
    background-color: #fff;
    border-radius: 50px;
    padding: 5px;
    margin: 1em 0 3em 0;
    box-shadow: 0 2px 10px rgba(138, 112, 214, 0.15);
    overflow: hidden;
  }
  
  .period-button {
    padding: 0.5em 2em;
    border: none;
    background-color: transparent;
    border-radius: 50px;
    font-size: 0.95em;
    font-weight: 500;
    color: var(--color-primary-1);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  
  .period-button--active {
    background-color: var(--color-primary-1);
    color: white;
  }
  
  .discount-badge {
    display: inline-block;
    background-color: #ff6b6b;
    color: white;
    font-size: 0.7em;
    padding: 2px 6px;
    border-radius: 10px;
    font-weight: bold;
  }
  
  .period-button--active .discount-badge {
    background-color: white;
    color: var(--color-primary-1);
  }
  
  .plans-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 100%;
  }
  
  /* Wrappers para cada plan */
  .plan-wrapper {
    position: relative;
  }
  
  .plan-wrapper--featured {
    position: relative;
    transform: translateY(-20px);
    z-index: 2;
  }
  
  /* Imágenes de robot */
  .robot-image {
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: 3;
    transition: all 0.3s ease;
  }
  
  .robot-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  /* Posicionamiento de los robots */
  .robot-image--free {
    top: -11%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .robot-image--featured {
    bottom: 15%;
    right: 20%;
  }
  
  .robot-image--pro {
    top: -11%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  /* Responsive ajustes */
  @media (max-width: 1200px) {
    .plans-grid {
      gap: 25px;
    }
  
    .plans-container {
      margin: 2em 1em;
      width: calc(100% - 2em);
    }
  }
  
  @media (max-width: 1000px) {
    .plans-section {
      padding: 3em 0;
    }
  
    .plans-grid {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 90%;
      max-width: 450px;
      margin: 0 auto;
      align-items: center;
    }
  
    .plan-card-container,
    .plan-wrapper--pro,
    .plan-wrapper--featured {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  
    .plan-wrapper--featured {
      order: -1;
      margin-bottom: 10px;
      transform: none;
    }
  
    .robot-image--free {
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .robot-image--pro {
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .robot-image--featured {
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      bottom: auto;
      right: auto;
    }
  }
  
  @media (max-width: 767px) {
    .plans-section {
      padding: 2em 0;
    }
  
    .plans-grid {
      width: 95%;
      max-width: 350px;
      gap: 50px;
    }
  
    .robot-image {
      width: 60px;
      height: 60px;
    }
  }
  
  @media (max-width: 480px) {
    .plans-section {
      padding: 2em 0;
    }
  
    .period-selector {
      margin: 1em 0 2em 0;
      width: 100%;
      justify-content: center;
    }
  
    .period-button {
      padding: 8px 20px;
      font-size: 14px;
    }
  
    .plans-container {
      padding: 1.5em 1em;
      border-radius: 0.8em;
    }
  
    .plans-title {
      font-size: 1.4em;
      text-align: center;
    }
  
    .plans-grid {
      gap: 40px;
    }
  
    .robot-image {
      width: 50px;
      height: 50px;
    }
  }
  
  @media (max-width: 360px) {
    .period-button {
      padding: 8px 15px;
      font-size: 13px;
    }
  
    .plans-container {
      padding: 1.2em 0.8em;
    }
  }
  </style>
  