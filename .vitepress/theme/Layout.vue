<script setup lang="ts">
import {useData} from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const {site, frontmatter} = useData()
</script>

<template>
  <div class="wrapper">
    <div id="frontmatter" v-if="frontmatter.home">
      <img width="120" height="120" style="clip-path: circle();" src="../../public/profile.png" alt="Profile picture">
      <h1 class="head"><span id="honorific">dr.</span> <span id="fullname">Tom Lauwaerts</span></h1>
      <!--<h1>{{ site.title }}</h1>-->
      <p>Hi, I am a computer science researcher.</p>

      <div class="badge"><a href="/resume.pdf" download="tolauwae.pdf">full resume</a></div>

      <!--
      <div class="socials">
        <a href="https://github.com/tolauwae"><img class="inline" src="../../public/icons/github.svg" /></a>
        <span class="space"></span>
        <a href="https://linkedin.com/in/tolauwae"><img class="inline" src="../../public/icons/linkedin.svg" /></a>
        <span class="space"></span>
        <a href="https://scholar.google.com/citations?user=uHdt08sAAAAJ&hl=en&oi=ao"><img class="inline" src="../../public/icons/google-scholar.svg"/></a>
        <span class="space"></span>
        <a href="mailto:tom.lauwaerts@ugent.be"><img class="inline" src="../../public/icons/mail.svg" /></a>
      </div>
      -->

    </div>
    <div v-else>
      <a href="/">Home</a>
      <Content/>
    </div>
  </div>
</template>
