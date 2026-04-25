<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StatisticsComponent from '@/components/common/StatisticsComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div class="hero-component">
    <header class="hero-component__header">
      <div class="hero-component__logo">
        <img src="@/assets/images/logo-alone.svg" alt="Logo" />
      </div>
      <div class="hero-component__title">
        <h1>{{ t('hero.title') }}</h1>
        <!--  <Icon icon="svg-spinners:clock" color="var(--color-primary-3)" /> -->
      </div>
      <div class="hero-component__info">
        <h3>{{ t('hero.subtitle') }}</h3>
        <h4>{{ t('hero.description') }}</h4>
      </div>
    </header>
    <main class="hero-component__main">
      <div class="hero-component__image">
        <img src="@/assets/images/laptop.svg" :alt="t('hero.title')" />
      </div>
    </main>
    <footer class="hero-component__footer">
      <StatisticsComponent />
    </footer>
  </div>
</template>

<style scoped>
.hero-component__main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-component__footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
}
.hero-component {
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 2em;
}
.hero-component__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-component__title {
  h1 {
    font-size: 2.5em;
    font-weight: 700;
    background: linear-gradient(
      to right,
      var(--color-primary-2),
      var(--color-primary-1),
      var(--color-primary-2)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.hero-component__info {
  text-align: center;
  h3 {
    font-size: 1.3em;
    color: var(--color-primary-3);
    font-weight: 650;
    margin: 0.2em 0 0.3em 0;
  }
  h4 {
    font-size: 0.9em;
    font-weight: 650;
    color: var(--color-primary-5);
  }
}

.hero-component__image {
  margin-top: 2em;
  max-width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 960px) {
  .hero-component__image {
    max-width: 100%;
  }
}

@media (max-width: 730px) {
  .hero-component {
    padding: 0em;
  }
  .hero-component__info {
    h3 {
      font-size: 1.1em;
    }
    h4 {
      font-size: 0.8em;
    }
  }
}
</style>
