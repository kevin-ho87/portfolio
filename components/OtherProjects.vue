<template>
  <div>
    <div class="row-other-projects">
      <div class="container">
        <div class="col">
          <h3 class="title">Projects</h3>
        </div>
      </div>
      <div class="container">
        <div class="col project-holder">
          <nuxt-link v-for="project in projectsCta" class="project" :class="`project_${project.path}`" :to="{ path: '/project/' + project.path }" :key="project.id">
            <img :src="`/img/${project.logo}`" alt="">
          </nuxt-link>
        </div>
      </div>
      <div class="container tributes-title-holder">
        <div class="col">
          <h3 class="title">Tributes</h3>
        </div>
      </div>
      <div class="container">
        <div class="col project-holder">
          <nuxt-link to="/arsenal" class="project project_arsenal">
            <img src="~assets/img/arsenal/logo-w.png" alt="" class="img-tribute-logo">
          </nuxt-link>
          <nuxt-link to="/tiktok" class="project project_tiktok">
            <img src="/img/tiktok/logo.png" alt="" class="img-tribute-logo">
          </nuxt-link>
          <nuxt-link to="/onepiece" class="project project_onepiece">
            <img src="/img/onepiece/logo-bnw.jpg" alt="" class="img-tribute-logo">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="row-hello">
      <div class="container row-hello_container">
        <div class="col">
          <h3 class="title-hello">Say Hello!</h3>
        </div>
        <div class="col">
          <nuxt-link to="/contact" class="btn">Contact</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectsCta: []
    }
  },
  mounted () {
    this.projectsCta = process.env.projects
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.row-other-projects {
  padding-top: 10vh;
  padding-bottom: 20vh;
}

.title {
  margin-top: 0;
  font-size: 2rem;
}

.title-hello {
  margin-top: 0;
  font-size: 3rem;
  @media screen and (min-width: 521px) {
    margin-bottom: 0;
  }
}

.row-hello {
  background-color: #eee;
  padding: 15vh 0;

  &_container {
    align-items: center;
    justify-content: center;
  }
}

.project-holder {
  display: flex;
  width: 100%;
  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
}

.project {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  padding: 20px;
  @media screen and (min-width: 521px) {
    height: 200px;
    max-width: 33.33%;
    flex: 1 1 33.33%;
  }

  &.nuxt-link-active {
    display: none;
  }

  &_arsenal {
    background-color: $c-arsenal-primary;
  }

  &_tiktok {
    background-color: $primary-colour;
  }

  &_onepiece {
    background-color: #000;
  }
}

.tributes-title-holder {
  margin-top: 10vh;
}

.img-tribute-logo {
  max-width: 210px;
  max-height: 90px;
}


</style>
