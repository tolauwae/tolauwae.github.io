<template>
  <nav class="site-nav">
    <div class="site-nav__content">
      <div class="site-nav__left"><a href="/">Tom Lauwaerts</a></div>
      <div class="site-nav__center"></div>
      <div class="site-nav__right"><a href="/essays">Essays</a></div>
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
  background-color: var(--navbar);
  color: var(--text-inverse);
  border-bottom: 0.5px solid var(--lines);
  font-weight: 500;
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
  font-size: var(--tiny);
}

.site-nav__right * {
  margin-left: var(--space-4);
}

a {
    color: var(--text-inverse);
    background-color: transparent;
    text-decoration: none;
    border-bottom: none;
}

a:hover {
    background-color: transparent;
    border-bottom: 1px solid var(--text-inverse);
}

@media (max-width: 62rem) {
  .site-nav {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }
}
</style>
