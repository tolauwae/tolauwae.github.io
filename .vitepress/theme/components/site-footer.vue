<template>
  <section class="site-footer">
    <div class="site-footer__content prose-container">
      <span class="section-heading"><h4>Personal Information</h4></span>
      <div class="info">
        <div>
          <b>contact</b>

          <ul>
            <li><a href="mailto:tom.lauwaerts@vub.be">tom.lauwaerts@vub.be</a></li>
            <li>Pleinlaan 2, 1050 Brussels, Belgium</li>
          </ul>
        </div>

        <div>
          <b>socials</b>
          <ul>
            <li><a href="https://scholar.google.com/citations?user=uHdt08sAAAAJ&hl=en&oi=ao">google scholar</a></li>
            <li><a href="https://github.com/tolauwae">github</a></li>
            <li><a href="https://orcid.org/0000-0003-1262-8893">orcid</a></li>
          </ul>
        </div>

        <div>
          <b>about</b>
          <ul>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
              >curriculum vitae</a>
            </li>
          </ul>
        </div>
        <!--<div id="copyright">          <span class="dim">©2026 Tom Lauwaerts</span>        </div>-->
      </div>
    </div>
  </section>
</template>

  <style scoped>
  * {
    font-family: var(--sans-serif);
  }

  a {
    color: var(--text-inverse);
    background-color: transparent;
    border: none;
  }

  a:hover {
    border-bottom: 1px solid var(--text-inverse);
    background-color: transparent;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  li {
    margin-top: var(--space-1);
  }

  .section-heading {
    border-bottom-color: var(--text-inverse);
    border-top: none;
  }

  .site-footer {
    background-color: var(--navbar);
    min-height: var(--sidebar-max-width);
    color: var(--text-inverse);
    margin-top: var(--space-12);
    padding-bottom: var(--space-6);
  }

  .site-footer__content {
    padding-top: var(--space-8);
  }

  .info {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    font-size: var(--tiny);
    padding-top: var(--space-4);
  }

  .dim {
    color: var(--subtext-inverse);
  }

  #copyright {
    grid-column: 1 / -1;
    align-content: center;
    text-align: center;
    padding-top: var(--space-4);
  }

  @media (width <= 62rem) {
    .info {
      grid-template-columns: 1fr;
    }
  }
  </style>
