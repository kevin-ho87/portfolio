<template>
  <div class="home" @mousemove="getCoords">
    <div class="angle-shape"></div>
    <div class="home__col-text">
      <h1 class="home__title">Welcome to my portfolio</h1>
      <p class="home__desc">I am Kevin Ho, Front end developer, Arsenal supporter, One Piece fan.</p>
    </div>

    <div class="home__col-projects">
      <div class="content-holder">
        <HomeRobotWorld :coords="coords"></HomeRobotWorld>
        <HomeProjects></HomeProjects>
      </div>
    </div>

  </div>
</template>

<script>
import HomeProjects from '~/components/HomeProjects'
import HomeRobotWorld from '~/components/HomeRobotWorld'

export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
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
    flex: 1 1 40%;
    padding: 12rem 5rem 1.5rem;
  }

  &__col-projects {
    flex: 1 1 60%;
    padding: 1.5rem 5rem;
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

</style>
