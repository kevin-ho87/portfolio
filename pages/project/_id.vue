<template>
  <div>
    <div class="hero">
      <div class="hero-shape" :style="{ backgroundColor: color }"></div>
      <div class="hero__col hero__col_text">
        <div class="hero__text-box">
          <h1 class="project-title">{{ title }}</h1>
          <p class="project-desc">{{ description }}</p>
          <a :href="url" class="btn" target="_blank" rel="noopener">Visit website</a>
        </div>
      </div>
      <div class="hero__col hero__col_logo">
        <img :src="`/img/${logo}`" alt="" class="project-logo">
      </div>
      <svg class="scroll-down" viewBox="0 0 100 125"><path d="M56.6 79.6L50 86.2l-6.6-6.6c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l8 8c.4.4.9.6 1.4.6s1-.2 1.4-.6l8-8c.8-.8.8-2 0-2.8s-2-.8-2.8 0z"/><path d="M59.4 68.6c-.8-.8-2-.8-2.8 0L50 75.2l-6.6-6.6c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l8 8c.4.4.9.6 1.4.6s1-.2 1.4-.6l8-8c.8-.8.8-2 0-2.8zM68 45V27c0-9.9-8.1-18-18-18s-18 8.1-18 18v18c0 9.9 8.1 18 18 18s18-8.1 18-18zM50 59c-7.7 0-14-6.3-14-14V27c0-7.7 6.3-14 14-14s14 6.3 14 14v18c0 7.7-6.3 14-14 14z"/><path d="M50 20c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2z"/></svg>
    </div>

    <div class="row-project-desc">
      <div class="container">
        <div class="col">
          <div class="project-desc-dash" v-scroll></div>
        </div>
      </div>
      <div class="container" v-scroll>
        <div class="col-sub col">
          <h3 class="title-desc">_Tech</h3>
          <p class="desc">{{ tech }}</p>
        </div>
        <div class="col-sub col">
          <h3 class="title-desc">_Year</h3>
          <p class="desc">{{ year }}</p>
        </div>
        <div class="col-main col">
          <h3 class="title-desc">_Info</h3>
          <p class="desc">{{ info }}</p>
        </div>
      </div>
    </div>

    <div class="gif-holder">
      <div class="container">
        <div v-for="gif in gifs" class="gif-col" v-scroll>
          <img :src="`/img/${gif}`" alt="" class="sample-gif">
        </div>
      </div>
    </div>

    <ProjectSlider :screenshots="screenshots" />

    <OtherProjects v-scroll />

  </div>
</template>

<script>
import { TimelineMax, TweenLite, Circ, Back } from 'gsap'
import ProjectSlider from '~/components/ProjectSlider'
import OtherProjects from '~/components/OtherProjects'
import scroll from '~/assets/scroll.js'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      if (window.innerWidth <= 800) {
        done()
        return
      }
      let tl = new TimelineMax({ onComplete: done })

      TweenLite.set('.hero__text-box', { transformPerspective: 600 })

      tl.from(el, 0.7, { autoAlpha: 0, ease: Circ.easeOut })

      tl.add('movementStamp+=1')
      tl.from('.hero-shape', 0.7, {
        x: '-50%',
        transformOrigin: '0 100%',
        rotation: 0,
        ease: Back.easeOut
      }, 'movementStamp+=1')

      tl.from('.hero__col_logo', 0.7, {
        width: '100%',
        ease: Back.easeOut
      }, 'movementStamp+=1')

      tl.from('.project-logo', 0.7, {
        x: -60,
        ease: Back.easeOut
      }, 'movementStamp+=1')

      tl.from('.hero__text-box', 0.7, {
        x: 100,
        autoAlpha: 0,
        rotationY: 40,
        ease: Circ.easeOut
      }, '-=.4')

      tl.from('.scroll-down', 0.7, { y: -20, autoAlpha: 0, ease: Back.easeOut }, '-=.1')

      tl.fromTo('.header', 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Circ.easeOut })
    },
    leave (el, done) {
      if (window.innerWidth <= 800) {
        done()
        return
      }
      let tl = new TimelineMax({ onComplete: done })

      tl.fromTo('.header', 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: Circ.easeOut })

      tl.staggerTo('.hero__text-box, .project-logo, .scroll-down', 0.7, {
        y: -100,
        autoAlpha: 0,
        ease: Back.easeIn
      }, 0.1)

      tl.to(el, 0.7, { autoAlpha: 0, ease: Circ.easeOut }, '-=0.1')
    }
  },
  asyncData ({ params, env, error }) {
    const project = env.projects.find((project) => String(project.path) === params.id)
    if (!project) {
      return error({ message: 'project not found', statusCode: 404 })
    }
    /* delay for preloader
      return new Promise((resolve) => {
      setTimeout(function () {
        resolve(project)
      }, 1000)
    }) */
    return project
  },
  scrollToTop: true,
  directives: {
    scroll: scroll
  },
  components: {
    ProjectSlider,
    OtherProjects
  },
  mounted () {
    window.scroll(0, 0)
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.hero {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  &__col {
    padding-top: 5rem;
    padding-bottom: 5rem;

    &_text {
      position: relative;
      z-index: 1;
      padding-left: 6rem;
      padding-right: 2rem;
      display: flex;
      align-items: center;
    }

    &_logo {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      @media screen and (min-width: 521px) {
        justify-content: center;
        align-items: center;
      }
    }
  }

  &__text-box {
    width: 100%;
    max-width: 400px;
  }
}

.scroll-down {
  display: block;
  position: absolute;
  bottom: 0;
  left: 45%;
  fill: $primary-colour;
  width: 60px;
  height: 70px;
  @media screen and (max-width: 800px) {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .hero {
    height: auto;
  }
  .hero__col {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  .hero__col_text {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 520px) {
  .hero {
    flex-direction: column;
  }
  .hero__col {
    padding-left: 20px;
    padding-right: 20px;
  }
  .hero__col_text {
    order: 1;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .hero__col_logo {
    position: relative;
    padding-bottom: 4rem;
    overflow: hidden;
    width: 100%;
  }
}

.hero-shape {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  @media screen and (max-width: 520px) {
    top: 0;
  }
  @media screen and (min-width: 521px) {
    bottom: 0;
    left: 50%;
    height: 180%;
    transform-origin: 0 100%;
    transform: rotate(15deg);
  }
}

.project-logo {
  position: relative;
  z-index: 2;
  @media screen and (min-width: 521px) {
    left: 60px;
  }
}

.project-title {
  font-size: 3rem;
  margin-top: 0;
  @media screen and (max-width: 520px) {
    font-size: 1.7rem;
  }
}

.project-desc {
  margin-bottom: 2rem;
}

//Project descripion section
.row-project-desc {
  padding-bottom: 20vh;
}

.project-desc-dash {
  width: 50px;
  height: 5px;
  background-color: $primary-colour;
  margin-top: 40vh;
  margin-bottom: 20vh;
  @media screen and (max-width: 800px) {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 520px) {
    margin-top: 5rem;
  }
}

@media screen and (min-width: 800px) {
  .col-main {
    max-width: 50%;
    flex: 0 0 50%;
  }
  .col-sub {
    max-width: 25%;
    flex: 0 0 25%;
  }
}

//GIF holder
.gif-holder {
  padding-top: 10vh;
  padding-bottom: 10vh;
}

.gif-col {
  padding: 20px;
  @media screen and (min-width: 520px) {
    width: 50%;

    &:nth-child(2n) {
      margin-top: 15%;
    }
  }

  &:nth-child(3n + 1) .sample-gif,
  &:nth-child(5n) .sample-gif {
    float: right;
  }

}

.sample-gif {
  width: 100%;
  max-width: 500px;
  height: auto;
  background-color: #444;
  margin-top: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}



</style>