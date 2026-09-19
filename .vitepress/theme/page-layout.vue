<script setup lang="ts">
import {useData} from 'vitepress'
import SiteNavbar from './components/site-navbar.vue'
import SiteFooter from './components/site-footer.vue'
import ArticlePage from './article-page.vue'
import HomePage from './home-page.vue'
import OverviewPage from './overview-page.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const {frontmatter, page} = useData()
</script>

<template>
  <div class="site-layout">
    <SiteNavbar />

    <main>
      <HomePage v-if="frontmatter.home" />
      <div v-else-if="page.relativePath.endsWith('/index.md')">
        <OverviewPage />
      </div>
      <div v-else-if="frontmatter.layout === 'article' || frontmatter.article">
        <ArticlePage />
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.site-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
