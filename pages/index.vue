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

@media screen and (max-width: 800px) {
  .home {
    display: block;
  }
  .home__col-text {
    text-align: center;
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
  left: 30%;
  width: 100%;
  height: 200%;
  transform-origin: 0 100%;
  transform: rotate(20deg);

  @media screen and (max-width: 800px) {
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
