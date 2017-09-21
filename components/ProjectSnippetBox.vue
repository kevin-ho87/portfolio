<template>
  <div class="box"
    :style="boxPosition"
  >{{ storeMovement }}</div>
</template>

<script>
// import { TweenLite } from 'gsap'

export default {
  props: ['index', 'item', 'valToDrag'],
  data () {
    return {
      boxWidth: 200,
      starterPos: 0,
      storeMovement: 0
    }
  },
  watch: {
    storeMovement () {
      if (this.storeMovement >= window.innerWidth) {

      } else {

      }
    }
  },
  computed: {
    boxPosition () {
      this.starterPos = (this.index * this.boxWidth)
      this.storeMovement = this.valToDrag + this.starterPos
      return {
        transform: `matrix(1, 0, 0, 1, ${this.storeMovement}, 0)`
      }
    }
  },
  mounted () {
    // TweenLite.set('.box', {x: this.boxStartX})
    // console.log(window.innerWidth)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 200px;
    height: 100px;
    background-color: green;
  }
</style>
