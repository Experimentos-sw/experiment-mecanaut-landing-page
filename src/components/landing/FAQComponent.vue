<template>
  <section class="faq-section">
    <TitleSectionComponent title="FAQ" />

    <div class="faq-container">
      <div class="faq-title">
        <h2>{{ $t('faq.title') }}</h2>
        <p>{{ $t('faq.subtitle') }}</p>
      </div>

      <div class="faq-questions">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="accordion-item"
          :class="{ active: activeQuestion === index + 1 }"
        >
          <div class="accordion-header" @click="toggleQuestion(index + 1)">
            <h3>{{ item.question }}</h3>
            <div class="accordion-icon">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="accordion-content">
            <p>{{ item.answer }}</p>
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

interface FaqItem {
  question: string
  answer: string
}

const { t } = useI18n()

const faqItems = computed<FaqItem[]>(() => [
  {
    question: t('faq.questions.0.question'),
    answer: t('faq.questions.0.answer'),
  },
  {
    question: t('faq.questions.1.question'),
    answer: t('faq.questions.1.answer'),
  },
  {
    question: t('faq.questions.2.question'),
    answer: t('faq.questions.2.answer'),
  },
  {
    question: t('faq.questions.3.question'),
    answer: t('faq.questions.3.answer'),
  },
])

const activeQuestion = ref<number | null>(1)

const toggleQuestion = (questionId: number) => {
  if (activeQuestion.value === questionId) activeQuestion.value = null
  else activeQuestion.value = questionId
}
</script>


<style scoped>
.faq-section {
  padding: 4em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 3em;
  padding: 0 2em;
}

.faq-title {
  width: 30%;
  padding-right: 3em;
}

.faq-title h2 {
  font-size: 2em;
  background: linear-gradient(to right, var(--color-primary-1), var(--color-primary-2));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5em;
  font-weight: 700;
}

.faq-title p {
  font-size: 1.1em;
  color: var(--color-primary-1);
  font-weight: 600;
}

.faq-questions {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.accordion-item {
  border-bottom: 1px solid #e0d7f7;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0;
  cursor: pointer;
  user-select: none;
}

.accordion-header h3 {
  font-size: 1em;
  color: var(--color-primary-1);
  font-weight: 700;
}

.accordion-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.accordion-icon span {
  position: absolute;
  background-color: var(--color-primary-1);
  width: 100%;
  height: 2px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

.accordion-icon span:last-child {
  transform: translateY(-50%) rotate(90deg);
}

.accordion-item.active .accordion-icon span:last-child {
  transform: translateY(-50%) rotate(0);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
  padding: 0 0;
}

.accordion-item.active .accordion-content {
  max-height: 300px;
  padding-bottom: 1.5em;
}

.accordion-content p {
  color: #000000;
  font-size: 0.95em;
}

@media (max-width: 768px) {
  .faq-container {
    flex-direction: column;
  }

  .faq-title,
  .faq-questions {
    width: 100%;
  }

  .faq-title {
    margin-bottom: 2em;
    padding-right: 0;
    text-align: center;
  }

  .accordion-header h3 {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .faq-container {
    padding: 0 1.2em;
  }

  .faq-title h2 {
    font-size: 1.7em;
  }

  .faq-title p {
    font-size: 1em;
  }

  .accordion-header {
    padding: 1.2em 0;
  }

  .accordion-header h3 {
    font-size: 0.9em;
    width: 85%;
  }
}
</style>
