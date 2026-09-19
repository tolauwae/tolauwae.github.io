<script setup lang="ts">
import EssayList from "./components/essay-list.vue"
import PageHeader from "./components/page-header.vue"
</script>

<template>
  <section class="home">
    <PageHeader variant="overview">
      <div class="home__intro">
        <div>
          <h1>Tom Lauwaerts</h1>
          <p>          I am a postdoctoral researcher at the Software Languages Lab (SOFT) of the Vrije Universiteit Brussel.</p>
        </div>
      </div>
    </PageHeader>

    <div class="home__content prose-container">
      <section class="portrait-cell section__fullwidth">
        <div id="resume">
          <div>
            <h3>I build tools for understanding software.</h3>
            <p>
              My research explores programming languages, testing, and debugging,
              with a focus on making complex software easier to reason about.
            </p>
            <a
              class="resume-button"
              href="/resume.pdf"
              target="_blank"
            >
              Curriculum Vitae
              <svg
                class="button__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14 6 20 12l-6 6M4 12h16" />
              </svg>
            </a>
          </div>
          <img
            class="portrait"
            src="/portrait.png"
            alt="Portrait of Tom Lauwaerts"
            width="256"
            height="384"
          >
        </div>
      </section>

      <section
        class="home__section section__fullwidth"
        aria-labelledby="essays-heading"
      >
        <span
          id="essays-heading"
          class="section-heading"
        ><h3>Latest Essays</h3><a
          class="home__more"
          href="/essays/"
        >All essays <svg
          class="thin-icon button__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14 6 20 12l-6 6M4 12h16" />
        </svg></a></span>
        <EssayList :limit="2" />
      </section>
    </div>
  </section>
</template>

<style scoped>
#resume {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--space-8);
    color: var(--text);
    border: 1px solid var(--lines);
    border-radius: var(--space-2);
    padding: var(--space-8);
    background: rgb(255 255 255 / 20%);
    backdrop-filter: blur(5px);
}

#resume h3 {
    margin: 0 0 var(--space-4);
    font-family: var(--serif);
    font-size: calc(5 * var(--grid-unit));
    line-height: 1.3;
}

.resume-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text);
    font-weight: bold;
    background-color: transparent;
    border: none;
}

.button__icon {
    width: 1.1em;
    height: 1.1em;
    fill: none;
    stroke: currentcolor;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.thin-icon {
  stroke-width: 1.5;
}

.resume-button::after {
    position: absolute;
    right: 0;
    bottom: -2px;
    left: 0;
    height: 2px;
    background: var(--text);
    content: "";
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
}

.resume-button:hover {
    background: transparent;
    color: var(--text);
}

.resume-button:hover::after,
.resume-button:focus-visible::after {
    transform: scaleX(1);
}

section {
    margin-bottom: var(--space-8);
}

.portrait {
    anchor-name: --portrait;
    border-radius: var(--space-2);
}

.portrait-cell {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    margin-top: calc(-1 * var(--space-16));
}

.home__intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  padding-bottom: var(--space-16);
}

.home__intro h1 {
  margin: 0;
  font-family: var(--serif);
  font-size: var(--title);
  line-height: 1.2;
}

.home__intro p {
  margin: var(--space-4) 0 0;
  color: color-mix(in srgb, var(--text-inverse) 70%, transparent);
}

#resume p {
  color: var(--subtext);
}

img.portrait {
  object-fit: cover;
  object-position: center top;
}

.home__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  padding-bottom: var(--space-24);
  color: var(--text);
}

.section__fullwidth {
  grid-column: 1 / -1;
}

.home__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.home__links a,
.home__more {
  background: transparent;
  font-size: var(--tiny);
  border-bottom: none;
  border-bottom: 1px solid white;
}

.home__more {
  display: inline-flex;
  align-items: center;
  margin: auto 0;
  justify-self: end;
  gap: var(--space-1);
}

.home__more:hover {
  border-bottom: 1px solid var(--subtext);
}

@media (width <= 34rem) {
  #resume {
    grid-template-columns: 1fr;
  }

  .portrait {
    grid-row: 1;
    width: 100%;
    height: 16rem;
  }

  img.portrait {
      margin: 0 auto;
    }
}

@media (width <= 62rem) {
.home__intro {
    align-items: flex-start;
  }

  .home__intro h1 {
    font-size: calc(9 * var(--grid-unit));
  }


  img.portrait {
      max-width: min(100%, 256px);
      height: auto;
      aspect-ratio: 1 / 1;
  }
}
</style>
