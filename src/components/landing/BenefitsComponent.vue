<template>
    <section class="benefits-section">
      <TitleSectionComponent :title="$t('benefits.sectionTitle')" />
      <div class="timeline-container">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-row">
          <template v-if="index % 2 === 0">
            <div class="benefit-text left">
              <div class="benefit-content">
                <h3>
                  {{ benefit.title.beforeHighlight }}
                  <span class="highlight">{{ benefit.title.highlight }}</span>
                </h3>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
            <div class="benefit-image right">
              <div class="image-container"></div>
            </div>
          </template>
  
          <template v-else>
            <div class="benefit-image left">
              <div class="image-container"></div>
            </div>
            <div class="benefit-text right">
              <div class="benefit-content">
                <h3>
                  {{ benefit.title.beforeHighlight }}
                  <span class="highlight">{{ benefit.title.highlight }}</span>
                </h3>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import TitleSectionComponent from '@/components/common/TitleSectionComponent.vue'
  
  const { t } = useI18n()
  
  interface BenefitTitle {
    beforeHighlight: string
    highlight: string
  }
  
  interface Benefit {
    title: BenefitTitle
    description: string
    image?: string
  }
  
  // Hacemos los beneficios reactivos al idioma usando computed
  const benefits = computed<Benefit[]>(() => [
    {
      title: {
        beforeHighlight: t('benefits.items.0.titleBefore'),
        highlight: t('benefits.items.0.titleHighlight'),
      },
      description: t('benefits.items.0.description'),
    },
    {
      title: {
        beforeHighlight: t('benefits.items.1.titleBefore'),
        highlight: t('benefits.items.1.titleHighlight'),
      },
      description: t('benefits.items.1.description'),
    },
    {
      title: {
        beforeHighlight: t('benefits.items.2.titleBefore'),
        highlight: t('benefits.items.2.titleHighlight'),
      },
      description: t('benefits.items.2.description'),
    },
    {
      title: {
        beforeHighlight: t('benefits.items.3.titleBefore'),
        highlight: t('benefits.items.3.titleHighlight'),
      },
      description: t('benefits.items.3.description'),
    },
    {
      title: {
        beforeHighlight: t('benefits.items.4.titleBefore'),
        highlight: t('benefits.items.4.titleHighlight'),
      },
      description: t('benefits.items.4.description'),
    },
  ])
  </script>
  
  <style scoped>
  .benefits-section {
    padding: 2em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  
  .timeline-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
  }
  
  .timeline-container::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(to bottom, #ffffff5c, var(--color-primary-1), #ffffff5c);
    top: 0.5em;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 0;
  }
  
  .benefit-row {
    display: flex;
    position: relative;
    margin: 60px 0;
  }
  
  .benefit-text,
  .benefit-image {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    padding: 0 40px;
  }
  
  .benefit-row::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #8a70d6;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  
  .left {
    text-align: right;
  }
  
  .right {
    text-align: left;
  }
  
  .benefit-text.left {
    display: flex;
    justify-content: flex-end;
  }
  
  .benefit-text.right {
    display: flex;
    justify-content: flex-start;
  }
  
  .benefit-image.left {
    display: flex;
    justify-content: flex-end;
  }
  
  .benefit-image.right {
    display: flex;
    justify-content: flex-start;
  }
  
  .image-container {
    width: 250px;
    height: 150px;
    background-color: #f0f0ff;
    border-radius: 8px;
  }
  
  .benefit-content {
    max-width: 350px;
    padding: 0 20px;
  }
  
  .benefit-content h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #333;
    font-weight: 600;
  }
  
  .highlight {
    color: #8a70d6;
    font-weight: 600;
  }
  
  .benefit-content p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
  }
  
  @media screen and (max-width: 768px) {
    .timeline-container {
      padding: 10px 0;
    }
  
    .timeline-container::after {
      left: 20px;
      margin-left: 0;
    }
  
    .benefit-row {
      flex-direction: column;
      margin: 40px 0;
    }
  
    .benefit-row::after {
      left: 20px;
      top: 3px;
      transform: translateX(-35%);
    }
  
    .benefit-text,
    .benefit-image {
      width: 100%;
      text-align: left;
    }
  
    .benefit-text {
      padding: 0 0 0 50px;
      margin-bottom: 10px;
    }
  
    .benefit-content {
      padding: 0 20px 0 0;
      max-width: 100%;
    }
  
    .benefit-text.left,
    .benefit-text.right {
      justify-content: flex-start;
    }
  
    .image-container {
      width: 100%;
      height: 120px;
      margin-top: 10px;
    }
  
    .benefit-image {
      display: block;
      padding: 0 20px 0 50px;
    }
  
    .benefit-image.left,
    .benefit-image.right {
      justify-content: flex-start;
    }
  
    .benefit-content h3 {
      font-size: 18px;
    }
  
    .benefit-content p {
      font-size: 14px;
    }
  
    .benefit-row:nth-child(even) .benefit-image {
      order: 2;
    }
  
    .benefit-row:nth-child(even) .benefit-text {
      order: 1;
    }
  }
  
  @media screen and (max-width: 480px) {
    .benefit-image {
      padding: 0 20px 0 50px;
    }
  
    .image-container {
      height: 100px;
    }
  
    .benefit-content h3 {
      font-size: 16px;
    }
  
    .benefit-content p {
      font-size: 13px;
    }
  }
  </style>
  