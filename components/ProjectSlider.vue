<template>
  <div class="row-devices">
    <div class="devices-holder container">
      <div class="device-group">
        <div class="device-col device-desktop">
          <div class="device">
            <img class="resize" src="~assets/img/browser-desktop.svg" width="710" height="30" alt="">
            <img class="resize" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
          </div>
        </div>
        <div class="devices-portable-holder">
          <div class="device-col">
            <div class="device-mobile device">
              <img class="resize" src="~assets/img/browser-mobile.svg" width="260" height="30" alt="">
              <img class="resize" src="~assets/img/projects/mobile-nintendo-1.jpg" alt="">
            </div>
          </div>
          <div class="device-col">
            <div class="device-tablet device">
              <img class="resize" src="~assets/img/browser-tablet.svg" width="400" height="30" alt="">
              <img class="resize" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="device-group">
        <div class="device-col device-desktop">
          <div class="device">
            <img class="resize" src="~assets/img/browser-desktop.svg" width="710" height="30" alt="">
            <img class="resize" src="~assets/img/projects/desktop-nintendo-1.jpg" alt="">
          </div>
        </div>
        <div class="devices-portable-holder">
          <div class="device-col">
            <div class="device-mobile device">
              <img class="resize" src="~assets/img/browser-mobile.svg" width="260" height="30" alt="">
              <img class="resize" src="~assets/img/projects/mobile-nintendo-1.jpg" alt="">
            </div>
          </div>
          <div class="device-col">
            <div class="device-tablet device">
              <img class="resize" src="~assets/img/browser-tablet.svg" width="400" height="30" alt="">
              <img class="resize" src="~assets/img/projects/tablet-nintendo-1.jpg" alt="">
            </div>
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
      // const spd = 1
      // const movement = 30
      // const staggerDuration = 5

      let $vm = this
      let iterable = document.querySelectorAll('.device-group')

      this.tl = new TimelineLite({
        paused: $vm.isPaused
      })

      iterable.forEach(element => {
        let innerTl = new TimelineLite()

        innerTl.fromTo(element, 1, {
          autoAlpha: 0,
          scale: 0.9
        }, {
          autoAlpha: 1,
          scale: 1,
          ease: Circ.easeOut
        })

        this.tl.add(innerTl)
      })

      /* this.tl.fromTo('.device-desktop', 1, {
        autoAlpha: 0,
        scale: 0.9
      }, {
        autoAlpha: 1,
        scale: 1,
        ease: Circ.easeOut
      })

      this.tl.add('devices')

      this.tl.to('.device-desktop', 0.7, {
        scale: 0.9,
        autoAlpha: 0,
        ease: Circ.easeOut
      }, 'devices+=1')

      this.tl.from('.device-mobile', 2, {
        autoAlpha: 0,
        scale: 0.7,
        x: 50,
        y: -50,
        transformOrigin: 'right center',
        ease: Back.easeOut
      }, 'devices+=1')

      this.tl.from('.device-tablet', 2.1, {
        autoAlpha: 0,
        scale: 0.7,
        x: -50,
        y: -50,
        transformOrigin: 'left center',
        ease: Back.easeOut
      }, 'devices+=1')

      this.tl.to('.devices-portable-holder', 0.7, {
        autoAlpha: 0,
        ease: Circ.easeOut
      }, '+=1') */

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
