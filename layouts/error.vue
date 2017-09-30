<template>
  <div class="page-holder" @mousemove="getCoords">
    <div class="text-holder">
      <h1 class="title-page">Oh No!</h1>
      <p class="subtitle-page">The page you are looking for could not be found.</p>
      <nuxt-link to="/" class="btn">Go home</nuxt-link>
    </div>

    <div class="robot-holder">
      <HomeRobotWorld :coords="coords"></HomeRobotWorld>
    </div>
  </div>
</template>

<script>
import HomeRobotWorld from '~/components/HomeRobotWorld'

export default {
  props: ['error'],
  data () {
    return {
      coords: {}
    }
  },
  components: {
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

.page-holder {
  background-color: #eee;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
}

.text-holder {
  position: relative;
  z-index: 2;
  text-align: center;
}

.title-page {
  font-size: 5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
}

.subtitle-page {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.robot-holder {
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 60%;
  transform-origin: 50% 0;
  transform: scale(2.4);
}
</style>