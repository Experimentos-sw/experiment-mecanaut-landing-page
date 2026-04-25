<template>
  <div class="landing-view">
    <NavbarComponent />
    <div id="home">
      <HeroComponent />
    </div>
    <div id="producto">
      <ProductComponent />
    </div>
    <div id="beneficios">
      <BenefitsComponent />
    </div>
    <div id="planes">
      <PlansComponent />
    </div>
    <div id="faq">
      <FAQComponent />
    </div>
    <div id="video">
      <ProductVideoComponent />
    </div>
    <div id="video">
      <TeamVideoComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from '@/components/common/NavbarComponent.vue'
import HeroComponent from '@/components/landing/HeroComponent.vue'
import ProductComponent from '@/components/landing/ProductComponent.vue'
import BenefitsComponent from '@/components/landing/BenefitsComponent.vue'
import PlansComponent from '@/components/landing/PlansComponent.vue'
import FAQComponent from '@/components/landing/FAQComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import ProductVideoComponent from '@/components/landing/ProductVideoComponent.vue'
import TeamVideoComponent from '@/components/landing/TeamVideoComponent.vue'
</script>

<style scoped>
.landing-view {
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  width: 100vw;
  padding: 0 8%;
  scroll-behavior: smooth;
}

#home,
#producto,
#beneficios,
#planes,
#faq {
  width: 100%;
  scroll-margin-top: 100px;
}
</style>
