<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import StatisticItemComponent from '@/components/common/StatisticItemComponent.vue'

const { t } = useI18n()

interface StatItem {
  title: string
  subtitle: string
  icon: string
}

const statistics = computed((): StatItem[] => [
  {
    title: t('statistics.lessFailures.title'),
    subtitle: t('statistics.lessFailures.subtitle'),
    icon: 'mdi:tools',
  },
  {
    title: t('statistics.scheduledMaintenance.title'),
    subtitle: t('statistics.scheduledMaintenance.subtitle'),
    icon: 'line-md:calendar',
  },
  {
    title: t('statistics.lessTime.title'),
    subtitle: t('statistics.lessTime.subtitle'),
    icon: 'svg-spinners:clock',
  },
])
</script>

<template>
  <section class="statistics-container">
    <div class="statistics-grid">
      <template v-for="(item, index) in statistics" :key="index">
        <StatisticItemComponent :title="item.title" :subtitle="item.subtitle" color="#ffffff">
          <Icon :icon="item.icon" width="50" height="50" color="white" />
        </StatisticItemComponent>

        <div v-if="index < statistics.length - 1" class="divider"></div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.statistics-container {
  background: linear-gradient(to top, var(--color-primary-1), var(--color-primary-2));
  border-radius: 12px;
  padding: 2em 1em;
  margin: 0 4em;
  width: 100%;
}

.statistics-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.divider {
  width: 1px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .statistics-grid {
    flex-direction: column;
    gap: 2rem;
  }

  .statistics-container {
    margin: 0;
  }
  .divider {
    width: 80%;
    height: 1px;
    margin: 0.5rem 0;
  }
}
</style>
