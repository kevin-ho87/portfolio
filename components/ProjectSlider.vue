<template>
  <div class="row-devices">
    <div class="devices-holder container">
      <div class="devices-holder__col devices-holder__col_desktop">
        <div class="device">
          <img class="resize" src="~assets/img/browser-desktop.svg" width="710" height="30" alt="">
          <div class="devices-image-holder">
            <img class="resize devices-image-holder__img device-desktop" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-desktop" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-desktop" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-desktop" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="devices-holder__col devices-holder__col_tablet">
        <div class="device">
          <img class="resize" src="~assets/img/browser-tablet.svg" width="400" height="30" alt="">
          <div class="devices-image-holder">
            <img class="resize devices-image-holder__img device-tablet" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-tablet" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-tablet" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
            <img class="resize devices-image-holder__img device-tablet" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="devices-control-holder container">
      <button type="button" class="btn" v-if="isEnded" @click="replay">Replay</button>
      <button type="button" class="btn" v-else @click="timelineBtn">{{ buttonText }}</button>
      <div class="scrubber">
        <div class="scrubber__blob"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite, Circ } from 'gsap'

export default {
  data () {
    return {
      isPaused: true,
      isEnded: false
    }
  },
  watch: {
    isPaused (value) {
      value === true ? this.tl.pause() : this.tl.play()
    }
  },
  computed: {
    buttonText () {
      return this.isPaused === true ? 'Play' : 'Pause'
    }
  },
  mounted () {
    if (process.browser) {
      this.createDraggable()
    }
    this.slider()
  },
  methods: {
    createDraggable () {
      let $vm = this
      const Draggable = require('gsap/Draggable')

      $vm.myScrubber = Draggable.create('.scrubber__blob', {
        type: 'x',
        bounds: '.scrubber',
        onDrag () {
          $vm.isPaused = true
          let perc = this.endX / this.maxX
          $vm.tl.progress(perc)
        }
      })
    },
    slider () {
      const spd = 1
      const movement = 30
      const staggerDuration = 5

      let $vm = this

      this.tl = new TimelineLite({
        paused: $vm.isPaused
      })

      this.tl.add('start')

      this.tl.staggerFromTo('.device-desktop:not(:first-of-type)', spd, {
        x: movement,
        autoAlpha: 0,
        scale: 0.9,
        transformOrigin: '100% 50%'
      }, {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        ease: Circ.easeOut
      }, staggerDuration, 'start')

      this.tl.staggerFromTo('.device-tablet:not(:first-of-type)', spd, {
        x: -movement,
        autoAlpha: 0,
        scale: 1.1
      }, {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        ease: Circ.easeOut
      }, staggerDuration, 'start')

      this.tl.eventCallback('onUpdate', () => {
        let theProgress = this.tl.progress()
        TweenMax.set(this.myScrubber[0].target, {x: (theProgress * this.myScrubber[0].maxX)})
        theProgress === 1 ? $vm.isEnded = true : $vm.isEnded = false
      })
    },
    timelineBtn () {
      this.isPaused = !this.isPaused
    },
    replay () {
      this.tl.play(0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

</style>
