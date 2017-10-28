<template>
<div>
  <div class="row-about container">
    <div class="page-col col">
      <h1 class="title-page">_About me</h1>
      <p class="desc">Hello, I'm Kevin and I am a front end web developer. I am passionate about enhancing the user experience by combining good design and code into one awesome application.</p>
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
            <li>Newsletter</li>
          </ul>
        </li>
        <li><span class="level-2-title">CSS</span>
          <ul class="level-2">
            <li>Sass, B.E.M. Sass</li>
            <li>Zurb Foundation, Bulma, Susy</li>
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
        <li>InDesign</li>
        <li>Flash</li>
        <li>Sublime text</li>
        <li>Avocode</li>
        <li>Gravit Designer</li>
        <li>GIT, SVN</li>
        <li>Sourcetree, GitHub</li>
        <li>JIRA, Slack, BitBucket</li>
      </ul>
    </div>
    <div class="col-about col">
      <h3 class="title-desc">_Experience with</h3>
      <ul class="desc">
        <li>SEO</li>
        <li>Banner ads</li>
        <li>Google web designer</li>
        <li>Backbone</li>
        <li>Silverstripe, Magento, Wordpress, Drupal</li>
        <li>ASP VBScript, PHP, SQL, MySQL</li>
      </ul>
    </div>
  </div>
  <div class="row-about container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Sketching</h3>
      <p class="desc">Sometimes I like to take a step away from technology to visualise concepts and draw cartoons.</p>
    </div>
    <div class="col">
      <img src="~assets/img/sketch.jpg" alt="">
    </div>
  </div>
  <div class="row-about row-about_alt container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Arsenal</h3>
      <p class="desc">I enjoy watching football (soccer to some of you) and basketball. Arsenal is my favourite football team!</p>
      <nuxt-link to="/arsenal" class="btn">View tribute</nuxt-link>
    </div>
    <div class="col">
      <img src="~assets/img/arsenal/facup_2017.jpg" width="700" alt="">
    </div>
  </div>
  <div class="row-about container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_Watches</h3>
      <p class="desc">Just cause, it's a cool way to tell time. I like these cool mechanical creations people wear on their wrists.</p>
      <nuxt-link to="/tiktok" class="btn">View tribute</nuxt-link>
    </div>
    <div class="col">
      <img src="~static/img/tiktok/alaska-4.jpg" alt="">
    </div>
  </div>
  <div class="row-about row-about_alt container" v-scroll>
    <div class="row-about__col-text col">
      <h3 class="title-desc">_One Piece</h3>
      <p class="desc">Action packed pirate treasure hunting adventure! My favourite manga/anime.</p>
      <nuxt-link to="/onepiece" class="btn">View tribute</nuxt-link>
    </div>
    <div class="col">
      <img src="~static/img/onepiece/chars-2.jpg" alt="">
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
      if (window.innerWidth <= 800) {
        done()
        return
      }
      TweenMax.from(el, 0.7, {
        autoAlpha: 0,
        ease: Circ.easeOut,
        onComplete: done
      })

      TweenMax.to('.header', 0.3, { autoAlpha: 1, ease: Circ.easeOut })
    },
    leave (el, done) {
      if (window.innerWidth <= 800) {
        done()
        return
      }
      TweenMax.to(el, 0.7, {
        autoAlpha: 0,
        ease: Circ.easeOut,
        onComplete: done
      })

      TweenMax.to('.header', 0.3, { autoAlpha: 0, ease: Circ.easeOut })
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
      // flex: 1 1 0;
    }

    .col {
      max-width: 50%;
      flex: 0 0 50%;
    }
  }

  .btn {
    margin-bottom: 1rem;
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
