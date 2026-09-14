<template>
  <nav class="site-nav">
    <div class="site-nav__content">
      <div class="site-nav__left">Tom Lauwaerts</div>
      <div class="site-nav__center"></div>
      <div class="site-nav__right"></div>
    </div>
  </nav>
</template>

<style scoped>
.site-nav {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: var(--navbar-height);
  border-bottom: 0.5px solid var(--lines);
  background-color: var(--surface);
  color: var(--text-inverse);
}

.site-nav__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  max-width: var(--page-max-width);
  height: 100%;
  margin: 0 auto;
}

.site-nav__center {
  justify-self: center;
}

.site-nav__right {
  justify-self: end;
}
</style>
