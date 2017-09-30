<template>
  <div class="home" @mousemove="getCoords">
    <div class="angle-shape"></div>
    <div class="home__col-text">
      <h1 class="home__title">Welcome to my portfolio</h1>
      <p class="home__desc">I am Kevin Ho, Front end developer, Arsenal supporter, One Piece fan.</p>
    </div>

    <div class="home__col-projects">
      <div class="content-holder">
        <div class="robot-world-holder">
          <HomeRobotWorld :coords="coords"></HomeRobotWorld>
        </div>
        <div class="projects-holder">
          <HomeProjects></HomeProjects>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { TimelineMax, TweenMax, Circ, Back, Elastic } from 'gsap'
import HomeProjects from '~/components/HomeProjects'
import HomeRobotWorld from '~/components/HomeRobotWorld'

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
    },
    leave (el, done) {
      TweenMax.staggerTo('.home__col-text, .content-holder', 0.7, {
        y: -100,
        autoAlpha: 0,
        ease: Back.easeIn,
        onComplete: done
      }, 0.1)
    }
  },
  mounted () {
    if (window.innerWidth <= 800) { return }

    let tl = new TimelineMax({ delay: 0.3 })

    TweenMax.set('.angle-shape', { transformOrigin: '0 100%' })
    TweenMax.set('.home__col-text, .home__col-projects', { transformPerspective: 600 })
    TweenMax.set('.projects-holder', {
      transformOrigin: '50% 100%',
      transformPerspective: 600
    })

    tl.fromTo('.projects-holder', 0.7, {
      rotationX: 20,
      y: -50,
      z: 20,
      autoAlpha: 0
    }, {
      rotationX: 0,
      y: 0,
      z: 0,
      autoAlpha: 1,
      ease: Back.easeOut
    })

    tl.fromTo('.robot-world-holder', 0.8, {
      autoAlpha: 0,
      y: 50,
      scaleY: 0.9
    }, {
      autoAlpha: 1,
      y: 0,
      scaleY: 1,
      ease: Back.easeOut
    }, '-=.7')

    tl.add('movementStamp')
    tl.to('.home__col-projects', 0.7, {
      x: '20%',
      rotationY: -20,
      ease: Back.easeOut
    }, 'movementStamp+=1.5')

    tl.to('.angle-shape', 0.7, {
      rotation: 20,
      x: '30%',
      ease: Back.easeOut
    }, 'movementStamp+=1.5')

    tl.from('.home__col-text', 0.7, {
      x: 100,
      autoAlpha: 0,
      rotationY: 40,
      ease: Circ.easeOut
    }, 'movementStamp+=1.5')

    tl.from('.header', 0.3, { autoAlpha: 0 })

    tl.to('.home__col-projects', 0.7, {
      rotationY: 0,
      ease: Elastic.easeOut
    }, '+=1')
  },
  asyncData () {
    /* delay for preloader
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    }) */
  },
  data () {
    return {
      coords: {}
    }
  },
  components: {
    HomeProjects,
    HomeRobotWorld
  },
  methods: {
    getCoords (e) {
      this.coords = e
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

@media screen and (min-width: 801px) {
  .projects-holder,
  .robot-world-holder {
    opacity: 0;
  }
}

.home {
  display: flex;
  height: 100vh;
  overflow: hidden;

  &__title {
    font-size: 3rem;
    margin-top: 0;
  }

  &__desc {
    font-size: 1.1rem;
  }

  &__col-text {
    position: relative;
    z-index: 1;
    max-width: 40%;
    flex: 0 0 40%;
    padding: 12rem 5rem 1.5rem;
  }

  &__col-projects {
    @media screen and (max-width: 800px) {
      flex: 1 1 60%;
      position: relative;
    }
    @media screen and (min-width: 801px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    padding: 1.5rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 800px) {
  .home {
    display: block;
  }
  .home__col-text {
    text-align: center;
    max-width: 100%;
  }
}

@media screen and (max-width: 520px) {
  .home {
    height: auto;
  }
  .home__col-text {
    padding-top: 6rem;
  }
  .home__col-text,
  .home__col-projects {
    padding-left: 20px;
    padding-right: 20px;
  }
  .home__title {
    font-size: 1.7rem;
  }
  .home__desc {
    font-size: 1rem;
  }
}

@media screen and (max-height: 600px) {
  .home {
    height: auto;
  }
}

.angle-shape {
  background-color: $primary-colour;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200%;

  @media screen and (max-width: 800px) {
    left: 30%;
    transform-origin: 0 100%;
    transform: rotate(40deg);
  }

  @media screen and (max-height: 600px) {
    display: none;
  }
}

.content-holder {
  position: relative;
  width: 100%;
  max-width: 500px;
}

</style>
