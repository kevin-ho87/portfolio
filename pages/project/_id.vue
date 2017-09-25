<template>
  <div>
    <div class="hero">
      <div class="hero__col hero__col_text">
        <div class="hero__text-box">
          <h1 class="project-title">{{ title }}</h1>
          <p class="project-desc">{{ description }}</p>
          <a :href="url" class="btn" target="_blank" rel="noopener">Visit website</a>
        </div>
      </div>
      <div class="hero__col hero__col_logo">
        <div class="hero-shape" :style="{ backgroundColor: color }"></div>
        <img :src="`/img/${logo}`" alt="" class="project-logo">
      </div>
    </div>

    <div class="row-project-desc">
      <div class="container">
        <div class="col">
          <div class="project-desc-dash"></div>
        </div>
      </div>
      <div class="container">
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
        <div v-for="gif in gifs" class="gif-col">
          <img :src="`/img/${gif}`" alt="" class="sample-gif">
        </div>
      </div>
    </div>

    <ProjectSlider :screenshots="screenshots" />
  </div>
</template>

<script>
import TweenLite from 'gsap'
import ProjectSlider from '~/components/ProjectSlider'

export default {
  asyncData ({ params, env, error }) {
    const project = env.projects.find((project) => String(project.path) === params.id)
    if (!project) {
      return error({ message: 'project not found', statusCode: 404 })
    }
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(project)
      }, 1000)
    })
    // return project
  },
  data () {
    return {

    }
  },
  components: {
    ProjectSlider
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