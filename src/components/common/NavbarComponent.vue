<template>
  <header class="navbar">
    <a
      href="#home"
      class="navbar__logo"
      aria-label="Inicio - Logo Mecanaut"
      @click.prevent="scrollToSection('home')"
    >
      <img src="@/assets/images/logo-alone.svg" alt="Logo Mecanaut" />
      <h1 class="navbar__logo-text">Mecanaut</h1>
    </a>

    <v-icon name="fc-globe" />
    <nav
      class="navbar__nav"
      :class="{ 'navbar__nav--mobile': isMobileMenuOpen }"
      aria-label="Navegación principal"
    >
      <ul role="menubar">
        <li v-for="item in navItems" :key="item.text" role="none">
          <a
            :href="item.href"
            role="menuitem"
            :aria-current="item.isActive ? 'page' : undefined"
            :class="{ active: item.isActive }"
            @click.prevent="handleNavClick(item)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>

      <div class="navbar__mobile-footer">
        <div class="navbar__language navbar__language--mobile">
          <template v-for="(lang, index) in languages" :key="lang.code">
            <button
              type="button"
              :aria-pressed="lang.isActive"
              :lang="lang.code"
              :class="{ active: lang.isActive }"
              @click="handleLanguageChange(lang.code)"
            >
              {{ lang.text }}
            </button>
            <span v-if="index < languages.length - 1" aria-hidden="true">|</span>
          </template>
        </div>

        <div class="navbar__buttons navbar__buttons--mobile">
          <InteractiveComponent
            tag="a"
            :href="loginConfig.href"
            variant="primary"
            :aria-label="loginConfig.ariaLabel"
            @click="loginConfig.onClick"
          >
            {{ loginConfig.text }}
          </InteractiveComponent>

          <InteractiveComponent
            tag="a"
            :href="loginConfig.href"
            variant="secondary"
            :aria-label="registerConfig.ariaLabel"
            @click="loginConfig.onClick"
          >
            {{ registerConfig.text }}
          </InteractiveComponent>
        </div>
      </div>
    </nav>

    <div
      class="navbar__language navbar__language--desktop"
      role="navigation"
      aria-label="Selector de idioma"
    >
      <template v-for="(lang, index) in languages" :key="lang.code">
        <button
          type="button"
          :aria-pressed="lang.isActive"
          :lang="lang.code"
          :class="{ active: lang.isActive }"
          @click="handleLanguageChange(lang.code)"
        >
          {{ lang.text }}
        </button>
        <span v-if="index < languages.length - 1" aria-hidden="true">|</span>
      </template>
    </div>

    <div
      class="navbar__buttons navbar__buttons--desktop"
      role="navigation"
      aria-label="Acciones de usuario"
    >
      <InteractiveComponent
        tag="a"
        :href="loginConfig.href"
        variant="primary"
        :aria-label="loginConfig.ariaLabel"
        @click="loginConfig.onClick"
      >
        {{ loginConfig.text }}
      </InteractiveComponent>

      <InteractiveComponent
        tag="a"
        :href="loginConfig.href"
        variant="secondary"
        :aria-label="registerConfig.ariaLabel"
        @click="loginConfig.onClick"
      >
        {{ registerConfig.text }}
      </InteractiveComponent>
    </div>

    <button
      class="navbar__hamburger"
      :class="{ 'is-active': isMobileMenuOpen }"
      aria-label="Menú principal"
      aria-expanded="false"
      @click="toggleMobileMenu"
    >
      <span class="navbar__hamburger-line"></span>
      <span class="navbar__hamburger-line"></span>
      <span class="navbar__hamburger-line"></span>
    </button>

    <div v-if="isMobileMenuOpen" class="navbar__overlay" @click="isMobileMenuOpen = false"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import InteractiveComponent from './InteractiveComponent.vue'
import type { NavItem, Language, ButtonConfig } from '@/types/navbar.types'

const { t, locale } = useI18n()

const navItems = ref<NavItem[]>([
  { text: t('navbar.home'), href: '#home', isActive: true },
  { text: t('navbar.product'), href: '#producto', isActive: false },
  { text: t('navbar.benefits'), href: '#beneficios', isActive: false },
  { text: t('navbar.plans'), href: '#planes', isActive: false },
  { text: t('navbar.faq'), href: '#faq', isActive: false },
])

const languages = ref<Language[]>([
  { code: 'es', text: 'ES', isActive: locale.value === 'es' },
  { code: 'en', text: 'EN', isActive: locale.value === 'en' },
])

const isMobileMenuOpen = ref(false)
const isProgrammaticScrolling = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''

    navItems.value = navItems.value.map((item) => ({
      ...item,
      isActive: item.href === `#${sectionId}`,
    }))

    isProgrammaticScrolling.value = true

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setTimeout(() => {
      isProgrammaticScrolling.value = false
    }, 3000)
  }
}

const handleNavClick = (item: NavItem) => {
  const sectionId = item.href.replace('#', '')
  scrollToSection(sectionId)
}

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (isProgrammaticScrolling.value) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id

          navItems.value = navItems.value.map((item) => ({
            ...item,
            isActive: item.href === `#${sectionId}`,
          }))
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px',
    },
  )

  const sections = ['home', 'producto', 'beneficios', 'planes', 'faq']
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      observer.observe(section)
    }
  })
})

const handleLanguageChange = (code: string) => {
  locale.value = code

  languages.value = languages.value.map((lang) => ({
    ...lang,
    isActive: lang.code === code,
  }))

  localStorage.setItem('userLanguage', code)
}

watch(locale, () => {
  navItems.value = [
    { text: t('navbar.home'), href: '#home', isActive: navItems.value[0].isActive },
    { text: t('navbar.product'), href: '#producto', isActive: navItems.value[1].isActive },
    { text: t('navbar.benefits'), href: '#beneficios', isActive: navItems.value[2].isActive },
    { text: t('navbar.plans'), href: '#planes', isActive: navItems.value[3].isActive },
    { text: t('navbar.faq'), href: '#faq', isActive: navItems.value[4].isActive },
  ]

  loginConfig.value = {
    ...loginConfig.value,
    text: t('navbar.login'),
    ariaLabel: t('navbar.loginAriaLabel'),
  }

  registerConfig.value = {
    ...registerConfig.value,
    text: t('navbar.register'),
    ariaLabel: t('navbar.registerAriaLabel'),
  }
})

const loginConfig = ref<ButtonConfig>({
  text: t('navbar.login'),
  href: 'https://agreeable-glacier-01474611e.6.azurestaticapps.net',
  ariaLabel: t('navbar.loginAriaLabel'),
  onClick: () => {
    isMobileMenuOpen.value = false
  },
})

const registerConfig = ref<ButtonConfig>({
  text: t('navbar.register'),
  href: 'https://agreeable-glacier-01474611e.6.azurestaticapps.net',
  ariaLabel: t('navbar.registerAriaLabel'),
  onClick: () => {
    console.log('Abriendo modal de registro')
    isMobileMenuOpen.value = false
  },
})
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background);
  padding: 2em 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.navbar__logo {
  display: flex;
  align-items: center;
}

.navbar__logo img {
  height: 45px;
  width: auto;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
}
.navbar__logo h1 {
  font-size: 1.3em;
  font-weight: 700;
  color: var(--color-primary-1);
  margin-left: 1em;
}

.navbar__nav {
  background-color: var(--color-gray-light);
  border-radius: 30px;
  padding: 5px;
  padding: 0.5em 2em;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.155);
}

.navbar__nav ul {
  display: flex;
  gap: 1em;
}

.navbar__nav li {
  list-style: none;
}

.navbar__nav a {
  display: block;
  padding: 0.6em 2em;
  color: var(--color-primary-1);
  font-size: 0.83em;
  font-weight: 400;
  border-radius: 25px;
  transition:
    background-color 0.5s ease,
    transform 0.15s ease;
  cursor: pointer;
}

.navbar__nav a.active {
  background: linear-gradient(to bottom, var(--color-primary-1), var(--color-primary-2));
  color: var(--color-white);
}

.navbar__nav a:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: scale(1.05);
}

.navbar__language {
  display: flex;
  align-items: center;
}

.navbar__language button {
  cursor: pointer;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 5px 8px;
  color: var(--color-primary-1);
  opacity: 0.8;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
}

.navbar__language button.active {
  opacity: 1;
  color: var(--color-primary-1);
  font-weight: 700;
}

.navbar__language span {
  margin: 0 5px;
  color: var(--color-text);
  opacity: 0.3;
}

.navbar__buttons {
  display: flex;
  gap: 15px;
  align-items: center;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;
}

.navbar__hamburger-line {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: var(--color-primary-1);
  transition: all 0.3s ease-in-out;
}

.navbar__hamburger.is-active .navbar__hamburger-line:nth-child(1) {
  transform: translateY(9.5px) rotate(45deg);
}

.navbar__hamburger.is-active .navbar__hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger.is-active .navbar__hamburger-line:nth-child(3) {
  transform: translateY(-9.5px) rotate(-45deg);
}

.navbar__mobile-footer {
  display: none;
}

.navbar__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}

@media (max-width: 1517px) {
  .navbar__logo-text {
    display: none;
  }
}

@media (max-width: 1370px) {
  .navbar {
    padding: 1.5em 0;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__nav {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100vh;
    background-color: var(--color-background);
    border-radius: 0;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 25;
    padding: 5em 1.5em 2em;
    overflow-y: auto;
  }

  .navbar__nav--mobile {
    right: 0;
  }

  .navbar__nav ul {
    flex-direction: column;
    gap: 0.7em;
  }

  .navbar__nav a {
    padding: 0.8em 1.5em;
    font-size: 1em;
    text-align: center;
  }

  .navbar__language--desktop,
  .navbar__buttons--desktop {
    display: none;
  }

  .navbar__mobile-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5em;
    gap: 1.5em;
  }

  .navbar__language--mobile {
    justify-content: center;
    margin-bottom: 0.5em;
  }

  .navbar__buttons--mobile {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .navbar__buttons--mobile :deep(a),
  .navbar__buttons--mobile :deep(button) {
    width: 100%;
    text-align: center;
  }
}
</style>
