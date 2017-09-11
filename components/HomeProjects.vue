<template>
  <div id="home-projects" class="projects" @mousemove="projectsOver" @mouseleave="projectsLeave">
    <a href="#" class="project project_nintendo">
      <img src="~assets/img/logo-nintendo.png" alt="">
    </a>
    <a href="#" class="project project_mind">
      <img src="~assets/img/logo-mind.png" alt="">
    </a>
    <a href="#" class="project project_cav">
      <img src="~assets/img/logo-cav.png" alt="">
    </a>
    <a href="#" class="project project_telstra">
      <img src="~assets/img/logo-telstra.png" alt="">
    </a>
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
      const projectRect = document.getElementById('home-projects').getBoundingClientRect()

      let xPosTilt = e.layerX / projectRect.width * 50 - 25
      let yPosTilt = e.layerY / projectRect.height * 50 - 25

      TweenLite.to('#home-projects', 0.7, {
        rotationY: 0.05 * xPosTilt,
        rotationX: 0.20 * yPosTilt
      })
    },
    projectsLeave () {
      TweenLite.to('#home-projects', 0.3, {
        rotation: 0,
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
  width: 250px;
  height: 150px;
  flex: 1 1 50%;
  padding: .8rem;

  &_nintendo {
    background-color: $c-nintendo;
  }
  &_mind {
    background-color: $c-mind;
  }
  &_cav {
    background-color: $c-cav;
  }
  &_telstra {
    background-color: $c-telstra;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
