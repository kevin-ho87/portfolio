<template>
  <div class="home" @mousemove="mousemove">
    <div class="angle-shape"></div>
    <div class="home__col-text">
      <h1 class="home__title">Welcome to my portfolio</h1>
      <p class="home__desc">I am Kevin Ho, Front end developer, Arsenal supporter, One Piece fan.</p>
    </div>

    <div class="home__col-projects">
      <div class="content-holder">
        <svg class="robot-world" :class="{'flipped': flip}" style="isolation:isolate" viewBox="971.333 432.333 311.753 450.27" width="311.753" height="450.27">
          <path d="M971.333 730.968c0-83.69 69.846-151.635 155.877-151.635 86.03 0 155.876 67.946 155.876 151.635 0 83.69-69.845 151.635-155.876 151.635-86.03 0-155.877-67.945-155.877-151.635z" fill="#163264"/><path d="M1067.304 535.65c7.394-11.788 17.614-18.713 22.81-15.455 5.193 3.258 3.408 15.473-3.985 27.26-7.395 11.79-17.614 18.715-22.81 15.457-5.194-3.26-3.41-15.474 3.984-27.262z" fill="#FEB931"/><path d="M1095.224 575.31c0-19.57 15.397-35.46 34.362-35.46 18.965 0 34.362 15.89 34.362 35.46 0 19.573-15.397 35.463-34.362 35.463-18.965 0-34.362-15.89-34.362-35.462z" fill="#FFEF02"/><path d="M1063.602 544.972c0-19.572 24.62-35.462 54.947-35.462 30.325 0 54.946 15.89 54.946 35.462 0 19.57-24.62 35.46-54.947 35.46s-54.948-15.89-54.948-35.46z" fill="#008DC9"/><path d="M1144.365 577.88c0-13.914 4.98-25.21 11.11-25.21 6.132 0 11.11 11.296 11.11 25.21 0 13.916-4.978 25.213-11.11 25.213-6.13 0-11.11-11.297-11.11-25.212z" fill="#FEB931"/>
          <g id="robot-head" class="robot-head"><path d="M1165.73 497.545l16.24 23.93-67.09 42.304-63.67-49.142 23.075-26.494 47.432-15.81 44.014 25.21z" fill="#FFEF02" vector-effect="non-scaling-stroke"/><path d="M1114.88 563.78l6.837-44.442-47.432-31.194-23.075 26.494 63.67 49.14z" fill="#FEB931" vector-effect="non-scaling-stroke"/><path d="M1087.105 521.475l-14.102 4.608 1.282-30.247 12.82 25.64zM1089.24 524.04l1.157 15.81 25.37-13.767-26.526-2.044z" fill="#E51A24"/></g>
        </svg>
        <div class="projects">
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
      </div>
    </div>

  </div>
</template>

<script>
import { TweenLite } from 'gsap'

export default {
  data () {
    return {
      flip: false,
      robotValModifier: 1
    }
  },
  watch: {
    flip (value) {
      if (value === true) {
        this.robotValModifier = -1
      } else {
        this.robotValModifier = 1
      }
    }
  },
  methods: {
    mousemove (e) {
      const robotRect = document.getElementById('robot-head').getBoundingClientRect()
      const robotCenter = [robotRect.left + robotRect.width / 2, robotRect.top + robotRect.height / 2]

      let angle = Math.atan2(e.pageX - robotCenter[0], -(e.pageY - robotCenter[1])) * this.robotValModifier * (180 / Math.PI)

      TweenLite.set('.robot-head', {
        transformOrigin: '50% 50%',
        rotation: angle + 100
      })

      if (e.clientX > robotCenter[0]) {
        this.flip = true
      } else {
        this.flip = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.home {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  &__title {
    font-size: rem-calc(36px);
    margin-top: 0;
  }

  &__desc {
    font-size: rem-calc(18px);
  }

  &__col-text {
    flex: 1 1 40%;
    padding: rem-calc(200px) rem-calc(80px) rem-calc(20px);
  }

  &__col-projects {
    flex: 1 1 60%;
    padding: rem-calc(20px) rem-calc(80px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.angle-shape {
  background-color: $primary-colour;
  position: absolute;
  bottom: 0;
  left: 30%;
  width: 100%;
  height: 200%;
  transform-origin: 0 100%;
  transform: rotate(20deg);
}

.content-holder {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.robot-world {
  width: 300px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.flipped {
  transform-origin: 50% 50%;
  transform: scaleX(-1);
}

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

}

</style>
