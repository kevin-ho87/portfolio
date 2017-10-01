<template>
<div>
  <div class="row-about container">
    <div class="page-col col">
      <h1 class="title-page">_About me</h1>
      <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ex eum! Nobis repellendus, cum recusandae quidem unde omnis nostrum laudantium animi voluptate iusto! Nostrum aut atque velit, exercitationem eaque aperiam.</p>
    </div>
  </div>
  <div class="row-about container">
    <div class="col-about col">
      <h3 class="title-desc">_Tech</h3>
      <ul class="desc">
        <li>Responsive web design</li>
        <li>Cross browser development</li>
        <li>Optimisation</li>
        <li>User Experience</li>
        <li><span class="level-2-title">HTML</span>
          <ul class="level-2">
            <li>Accessibility - Level AA</li>
          </ul>
        </li>
        <li><span class="level-2-title">CSS</span>
          <ul class="level-2">
            <li>CSS 3</li>
            <li>Sass, B.E.M. Sass</li>
            <li>Zurb Foundation, Susy</li>
          </ul>
        </li>
        <li><span class="level-2-title">Javascript</span>
          <ul class="level-2">
            <li>Greensock</li>
            <li>jQuery</li>
            <li>Vue, Nuxt</li>
            <li>ES6</li>
          </ul>
        </li>
        <li>Yarn, NPM, Bower, Gulp</li>
      </ul>
    </div>
    <div class="col-about col">
      <h3 class="title-desc">_Tools</h3>
      <ul class="desc">
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Sublime text</li>
        <li>Avocode</li>
        <li>Gravit Designer</li>
        <li>GIT, Sourcetree, SVN, GitHub</li>
        <li>JIRA</li>
      </ul>
    </div>
    <div class="col-about col">
      <h3 class="title-desc">_Experience with</h3>
      <ul class="desc">
        <li>SEO</li>
        <li>Banner ads</li>
        <li>Silverstripe, Magento, Wordpress, Drupal</li>
        <li>ASP VBScript, PHP, SQL, MySQL</li>
      </ul>
    </div>
  </div>
  <div class="row-about container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Sketching</h3>
      <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit quidem, pariatur non. Incidunt a esse consectetur nostrum ad velit aut nam aliquam quaerat sint. Expedita illo ipsum beatae necessitatibus.</p>
    </div>
    <div class="col">
      <div class="placeholder-img"></div>
    </div>
  </div>
  <div class="row-about row-about_alt container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Arsenal</h3>
      <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit quidem, pariatur non. Incidunt a esse consectetur nostrum ad velit aut nam aliquam quaerat sint. Expedita illo ipsum beatae necessitatibus.</p>
    </div>
    <div class="col">
      <div class="placeholder-img"></div>
    </div>
  </div>
  <div class="row-about container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Watches</h3>
      <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit quidem, pariatur non. Incidunt a esse consectetur nostrum ad velit aut nam aliquam quaerat sint. Expedita illo ipsum beatae necessitatibus.</p>
    </div>
    <div class="col">
      <div class="placeholder-img"></div>
    </div>
  </div>
  <OtherProjects v-scroll />
</div>
</template>

<script>
import scroll from '~/assets/scroll.js'
import { TweenMax, Circ } from 'gsap'
import OtherProjects from '~/components/OtherProjects'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      TweenMax.from(el, 0.7, {
        autoAlpha: 0,
        ease: Circ.easeOut,
        onComplete: done
      })
    }
  },
  scrollToTop: true,
  directives: {
    scroll: scroll
  },
  components: {
    OtherProjects
  },
  mounted () {
    window.scroll(0, 0)
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

@media screen and (min-width: 521px) {
  .page-col {
    max-width: 80%;
    flex: 0 0 80%;
  }
}

.row-about {
  margin-bottom: 6rem;
  @media screen and (min-width: 521px) {
    &_alt {
      flex-direction: row-reverse;
    }

    &__col-text {
      flex: 1 1 0;
    }
  }
}

.title-page {
  margin-left: -0.5rem;
  margin-top: 20vh;
}

@media screen and (min-width: 521px) {
  .col-about {
    flex: 0 0 30%;
    max-width: 30%;
  }
}

.placeholder-img {
  width: 400px;
  height: 400px;
  background-color: #444;
}

</style>
