<template>
  <div>
    <SiteHeader />
    <nuxt class="site-holder"/>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style>
  .site-holder {
  	position: relative;
  	z-index: 1;
  }

</style>
