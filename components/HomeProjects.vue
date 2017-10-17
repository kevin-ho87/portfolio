<template>
  <div id="home-projects" class="projects" @mousemove="projectsOver" @mouseleave="projectsLeave">
    <nuxt-link to="/project/nintendo" class="project project_nintendo">
      <img src="~assets/img/logo-nintendo.png" alt="">
    </nuxt-link>
    <nuxt-link to="/project/mind" class="project project_mind">
      <img src="~assets/img/logo-mind.png" alt="">
    </nuxt-link>
    <nuxt-link to="/project/cav" class="project project_cav">
      <img src="~assets/img/logo-cav.png" alt="">
    </nuxt-link>
    <nuxt-link to="/project/telstra" class="project project_telstra">
      <img src="~assets/img/logo-telstra.png" alt="">
    </nuxt-link>
  </div>
</template>

<script>
import { TweenLite, Back } from 'gsap'

export default {
  mounted () {
    TweenLite.set('#home-projects', {
      rotationZ: '-0.1',
      transformPerspective: 500,
      transformOrigin: 'center center'
    })
  },
  methods: {
    projectsOver (e) {
      let projectRect = document.getElementById('home-projects').getBoundingClientRect()

      let xPosTilt = (e.pageX - projectRect.left) / projectRect.width * 100 - 50
      let yPosTilt = (e.pageY - projectRect.top) / projectRect.height * 100 - 50

      TweenLite.to('#home-projects', 0.7, {
        rotationY: 0.10 * xPosTilt,
        rotationX: 0.20 * yPosTilt
      })
    },
    projectsLeave () {
      TweenLite.to('#home-projects', 0.3, {
        rotationY: 0,
        rotationX: 0,
        ease: Back.easeOut
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.projects {
  display: flex;
  flex-wrap: wrap;
  margin-top: 200px;
  position: relative;
  z-index: 2;
}

.project {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 10px;
}

</style>