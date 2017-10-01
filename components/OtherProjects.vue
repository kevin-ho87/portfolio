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
}


</style>
