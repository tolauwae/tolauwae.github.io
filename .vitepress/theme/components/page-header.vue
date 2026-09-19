<script setup lang="ts">
import {computed} from "vue"
import {useData} from "vitepress"

const props = withDefaults(defineProps<{variant?: "article" | "overview"}>(), {
  variant: "article",
})
const {frontmatter, page} = useData()
const pathParts = computed(() => page.value.relativePath.split("/"))
const directoryName = computed(() => pathParts.value.at(-2) ?? "")
const sectionName = computed(() => directoryName.value.charAt(0).toUpperCase() + directoryName.value.slice(1))
const isOverview = computed(() => props.variant === "overview")
const title = computed(() => frontmatter.value.title || sectionName.value)
</script>

<template>
  <header
    class="page-header"
    :class="{ overview: isOverview }"
  >
    <div
      class="page-header__grid"
      :class="isOverview ? 'prose-container' : 'content-grid'"
    >
      <div
        class="page-header__content"
        :class="{ 'content-grid-prose': !isOverview }"
      >
        <slot>
          <span class="page-header-label">{{ frontmatter.language }}</span>
          <h1>{{ title }}</h1>
          <p v-if="frontmatter.description">
            {{ frontmatter.description }}
          </p>
        </slot>
      </div>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: var(--surface);
  color: var(--text-inverse);
}

.page-header::before,
.page-header::after {
  position: absolute;
  inset: 0;
  z-index: 0;
  content: "";
  pointer-events: none;
}

.page-header::before {
  inset: -20%;
  background:
    radial-gradient(ellipse 28% 75% at 8% 78%, rgb(48 106 194 / 90%) 0%, transparent 100%),
    radial-gradient(ellipse 27% 78% at 92% 58%, rgb(46 101 187 / 84%) 0%, transparent 100%),
    radial-gradient(ellipse 38% 65% at 50% 5%, rgb(35 55 73 / 82%) 0%, transparent 100%);
  filter: blur(2.5rem);
  transform: scale(1.05);
}

.page-header::after {
  background: rgb(12 22 31 / 30%);
  backdrop-filter: blur(2.25rem) saturate(115%);
}

.page-header__grid {
  position: relative;
  z-index: 1;
  min-height: calc(4 * var(--navbar-height));
  padding-top: var(--space-24);
  padding-bottom: var(--space-12);
}

.page-header__content {
  align-self: center;
}

.page-header h1 {
  margin: var(--space-6) 0 0;
  font-family: var(--font-title);
  font-size: var(--title);
  font-weight: bold;
  line-height: 1.2;
  font-variant-ligatures: common-ligatures;
}

.page-header p {
  margin: var(--space-4) 0 0;
  color: color-mix(in srgb, var(--text-inverse) 70%, transparent);
  line-height: 1.5;
}

.page-header-label {
  font-size: var(--tiny);
}

@media (width <= 50rem) {
  .page-header__grid {
    min-height: auto;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
}
</style>
