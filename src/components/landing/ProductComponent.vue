<template>
    <section class="product-container">
      <TitleSectionComponent :title="$t('product.sectionTitle')" />
      <div class="product-content">
        <h2 class="product-title">{{ $t('product.title') }}</h2>
  
        <div class="product-card">
          <div class="product-info">
            <h3 class="product-subtitle">
              {{ $t('product.subtitle') }}
            </h3>
  
            <p class="product-description">
              {{ $t('product.description') }}
            </p>
  
            <ul class="product-features">
              <li v-for="(feature, index) in productFeatures" :key="index" class="product-feature">
                <div class="feature-bullet"></div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
  
          <div class="product-image">
            <div class="product-image-container"></div>
          </div>
        </div>
        <h2 class="product-title product-title-2">{{ $t('product.maintenanceTypes') }}</h2>
        <div class="product-maintenance-container">
          <div
            v-for="(item, index) in maintenanceItems"
            :key="index"
            class="product-maintenance-item"
          >
            <MaintenanceItemComponent
              :title="item.title"
              :description="item.description"
              :backgroundImage="item.backgroundImage"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import TitleSectionComponent from '@/components/common/TitleSectionComponent.vue'
  import MaintenanceItemComponent from '@/components/common/MaintenanceItemComponent.vue'
  
  import backgroundImage1 from '@/assets/images/maintenance-item-1.png'
  import backgroundImage2 from '@/assets/images/maintenance-item-2.png'
  import backgroundImage3 from '@/assets/images/maintenance-item-3.png'
  
  const { t } = useI18n()
  
  // Features list haciendo reactivo al idioma
  const productFeatures = computed(() => [
    t('product.features.preventive'),
    t('product.features.corrective'),
    t('product.features.predictive'),
  ])
  
  // Maintenance items haciendo reactivo al idioma
  const maintenanceItems = computed(() => [
    {
      title: t('product.maintenance.preventive.title'),
      description: t('product.maintenance.preventive.description'),
      backgroundImage: backgroundImage1,
    },
    {
      title: t('product.maintenance.corrective.title'),
      description: t('product.maintenance.corrective.description'),
      backgroundImage: backgroundImage2,
    },
    {
      title: t('product.maintenance.predictive.title'),
      description: t('product.maintenance.predictive.description'),
      backgroundImage: backgroundImage3,
    },
  ])
  </script>
  
  <style scoped>
  .product-container {
    width: 100%;
    padding: 4em 0;
  }
  
  .product-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 0 auto;
  }
  
  .product-title {
    background: linear-gradient(to right, var(--color-primary-1), var(--color-primary-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1.5em;
    font-weight: 700;
    margin: 1.5em 0;
    text-align: center;
  }
  .product-title-2 {
    margin-top: 2em;
    font-size: 1.3em;
  }
  .product-card {
    display: flex;
    background: linear-gradient(to bottom, #a692c13a, #ffffff73);
    border-radius: 16px;
    padding: 3rem;
    gap: 3rem;
    width: 100%;
  }
  
  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .product-subtitle {
    color: var(--color-primary-1);
    font-size: 1.05em;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .product-description {
    color: #333;
    font-size: 0.95em;
    margin-bottom: 2rem;
  }
  
  .product-feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9em;
    span {
      color: var(--color-primary-1);
      font-weight: 400;
    }
  }
  
  .feature-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-primary-3);
    flex-shrink: 0;
  }
  
  .product-image {
    flex: 1;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-image-container {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    border-radius: 16px;
  }
  .product-maintenance-container {
    width: 100%;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .product-maintenance-item {
    width: 30%;
  }
  @media (max-width: 1029px) {
    .product-maintenance-item {
      width: 48%;
    }
  }
  @media (max-width: 768px) {
    .product-content {
      width: 100%;
    }
    .product-card {
      flex-direction: column;
      padding: 2rem;
      text-align: center;
    }
  
    .product-subtitle {
      font-size: 1.3rem;
    }
  
    .product-description {
      font-size: 1rem;
    }
    .product-features {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 470px) {
    .product-maintenance-item {
      width: 100%;
    }
  }
  </style>
  