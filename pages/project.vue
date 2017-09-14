<template>
  <div>
    <div class="hero">
      <div class="hero__col hero__col_text">
        <div class="hero__text-box">
          <h1 class="project-title">Yours to play</h1>
          <p class="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis repellat vel quas asperiores ut optio quaerat impedit.</p>
          <a href="#" class="btn">Visit website</a>
        </div>
      </div>
      <div class="hero__col hero__col_logo">
        <div class="hero-shape"></div>
        <img src="~assets/img/logo-nintendo.png" alt="" class="project-logo">
      </div>
    </div>

    <div class="row-project-desc">
      <div class="container">
        <div class="col-sub col">
          <h3 class="title-desc">Tech</h3>
          <p>Greensock, jQuery, HTML5, CSS3</p>
        </div>
        <div class="col-sub col">
          <h3 class="title-desc">Year</h3>
          <p>2016</p>
        </div>
        <div class="col-main col">
          <h3 class="title-desc">Info</h3>
          <p>Front end. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perferendis, hic quasi eos eligendi ea ad cumque commodi harum, quos impedit suscipit autem nostrum molestiae, sunt atque odit quisquam, quas.</p>
        </div>
      </div>
    </div>

    <div class="gif-holder container">
      <div class="sample-gif">
        <span>animated GIF</span>
      </div>
    </div>

    <div class="devices-holder container">
      <div>
        <svg viewBox="1564 2066 710 30" width="710" height="30"><path d="M1569 2066h700c2.76 0 5 2.24 5 5v25h-710v-25c0-2.76 2.24-5 5-5z" fill="#D1D1D1"/><path d="M2248.643 2081c0-3.022 2.435-5.476 5.434-5.476 2.998 0 5.433 2.454 5.433 5.476s-2.435 5.476-5.433 5.476c-3 0-5.434-2.454-5.434-5.476zM2230.53 2081c0-3.022 2.435-5.476 5.434-5.476 3 0 5.434 2.454 5.434 5.476s-2.435 5.476-5.434 5.476c-3 0-5.433-2.454-5.433-5.476zM2212.418 2081c0-3.022 2.435-5.476 5.434-5.476 3 0 5.434 2.454 5.434 5.476s-2.435 5.476-5.434 5.476c-3 0-5.434-2.454-5.434-5.476z" fill="#FFF"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'

export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    TweenLite.set('.hero-shape', {
      rotation: 15,
      transformOrigin: '0 100%'
    })

    TweenLite.set('.project-logo', {x: 60})
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.hero {
  display: flex;
  height: 100vh;
  overflow: hidden;

  &__col {
    flex: 1 1 50%;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &_text {
      padding-left: 6rem;
      padding-right: 2rem;
      display: flex;
      align-items: center;
    }

    &_logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__text-box {
    width: 100%;
    max-width: 400px;
  }
}

.hero-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180%;
  background-color: $c-nintendo;
}

.project-logo {
  position: relative;
  z-index: 2;
}

.project-title {
  font-size: 3rem;
  margin-top: 0;
}

.project-desc {
  margin-bottom: 2rem;
}

</style>
