<script setup lang="ts">
import {useData} from 'vitepress'
import SiteNav from './components/sitenav.vue'
import Footer from './components/footer.vue'
import Article from './Article.vue'
import Home from './Home.vue'
import Overview from './Overview.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const {frontmatter, page} = useData()
</script>

<template>
  <div class="site-layout">
    <SiteNav />

    <main>
      <Home v-if="frontmatter.home" />
      <div v-else-if="page.relativePath.endsWith('/index.md')">
        <Overview />
      </div>
      <div v-else-if="frontmatter.layout === 'article' || frontmatter.article">
          <Article />
      </div>
    </main>

    <Footer />
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
