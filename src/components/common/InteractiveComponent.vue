<template>
  <component
    :is="tag"
    :class="[
      'interactive-element',
      `interactive-element--${variant}`,
      tag === 'button' || tag === 'a' ? 'button_style' : '',
    ]"
    :type="tag === 'button' ? type : undefined"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<!--  :target="tag === 'a' ? '_blank' : undefined"
    :rel="tag === 'a' ? 'noopener noreferrer' : undefined" -->

<script setup lang="ts">
interface Props {
  tag?: 'button' | 'a' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

withDefaults(defineProps<Props>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
  onClick: () => {},
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.interactive-element {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1em 2.5em;
  border-radius: 100px;
  font-family: var(--font-family-base);
  font-weight: 400;
  border: none;
  text-align: center;
  font-size: 0.82em;
  transition: transform 0.1s ease;
}

.button_style {
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
}

.interactive-element--primary {
  background-color: var(--color-white);
  color: var(--color-primary-4);
  outline: 1.5px solid var(--color-primary-3);
  box-shadow: 0 2px 4px rgba(148, 136, 194, 0.2);
}

.interactive-element--secondary {
  background: linear-gradient(to bottom, var(--color-primary-1), var(--color-primary-2));
  color: var(--color-white);
  box-shadow: 0 3px 5px rgba(101, 89, 179, 0.3);
}
</style>
