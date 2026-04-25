<template>
  <section class="video-section">
    <h2 class="video-title">{{ $t('video.product') }}</h2>
    <div class="video-container">
      <iframe
        width="860"
        height="515"
        src="https://www.youtube.com/embed/cW31cmfSuA8?si=948fDX9dN8FbaNFn"
        title="Video about the project"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.video-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
}

.video-title {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1.5em;
  background: linear-gradient(to right, var(--color-primary-1), var(--color-primary-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.video-container {
  width: 100%;
  max-width: 860px;
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .video-container iframe {
    width: 100%;
    height: 400px;
  }
}

@media (max-width: 600px) {
  .video-container iframe {
    height: 300px;
  }
  
  .video-title {
    font-size: 1.5em;
    text-align: center;
  }
}
</style> 