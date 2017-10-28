<template>
  <div>
    <SiteHeader />
    <div class="site-holder">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'

export default {
  components: {
    SiteHeader
  },
  mounted () {
    console.log('%c Welcome to my portfolio! ', 'background: #132d5b; color: #fff')
    console.log('%c Feel free to peek into the code at https://github.com/kevin-ho87/portfolio ', 'background: #132d5b; color: #fff')
  }
}
</script>

<style>
  .site-holder {
  	position: relative;
  	z-index: 1;
  }

</style>
