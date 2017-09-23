<template>
  <div id="row-devices" class="row-devices">
    <div class="devices-holder container">

      <div v-for="screenshot in screenshots" class="device-group">
        <div class="device-col device-desktop">
          <div class="device">
            <img class="resize" src="~assets/img/browser-desktop.svg" width="710" height="30" alt="">
            <img class="resize" :src="`/img/${screenshot.desktop}`" alt="">
          </div>
        </div>
        <div class="devices-portable-holder">
          <div class="device-col">
            <div class="device-mobile device">
              <img class="resize" src="~assets/img/browser-mobile.svg" width="260" height="30" alt="">
              <img class="resize" :src="`/img/${screenshot.mobile}`" alt="">
            </div>
          </div>
          <div class="device-col">
            <div class="device-tablet device">
              <img class="resize" src="~assets/img/browser-tablet.svg" width="400" height="30" alt="">
              <img class="resize" :src="`/img/${screenshot.tablet}`" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="closer-screen">
        <div class="device-col device-desktop">
          <div class="device">
            <img class="resize" src="~assets/img/browser-desktop.svg" width="710" height="30" alt="">
            <img class="resize" :src="`/img/${screenshots[0].desktop}`" alt="">
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
import { TweenMax, TimelineLite, Circ, Back } from 'gsap'

export default {
  props: ['screenshots'],
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
      window.addEventListener('scroll', this.handleScroll)
      this.createDraggable()
    }
    this.slider()
  },
  methods: {
    handleScroll () {
      const rowDeviceOffset = document.getElementById('row-devices').offsetTop
      if (window.pageYOffset > rowDeviceOffset - (window.innerHeight / 2)) {
        window.removeEventListener('scroll', this.handleScroll)
        this.isPaused = false
      }
    },
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
      const $vm = this
      const iterable = document.querySelectorAll('.device-group')

      this.tl = new TimelineLite({
        paused: $vm.isPaused
      })

      for (let index = 0; index < iterable.length; index++) {
        let desktop = iterable[index].querySelectorAll('.device-desktop')
        let tablet = iterable[index].querySelectorAll('.device-tablet')
        let mobile = iterable[index].querySelectorAll('.device-mobile')
        let portables = iterable[index].querySelectorAll('.devices-portable-holder')
        let delay = 2

        this.tl.fromTo(desktop, 1, {
          autoAlpha: 0,
          scale: 0.9
        }, {
          autoAlpha: 1,
          scale: 1,
          ease: Circ.easeOut
        }, '-=0.3')

        this.tl.add('devices')

        this.tl.to(desktop, 0.7, {
          scale: 0.9,
          autoAlpha: 0,
          ease: Circ.easeOut
        }, 'devices+=' + delay)

        this.tl.from(mobile, 2, {
          autoAlpha: 0,
          scale: 0.7,
          x: 50,
          y: -50,
          transformOrigin: 'right center',
          ease: Back.easeOut
        }, 'devices+=' + delay)

        this.tl.from(tablet, 2.1, {
          autoAlpha: 0,
          scale: 0.7,
          x: -50,
          y: -50,
          transformOrigin: 'left center',
          ease: Back.easeOut
        }, 'devices+=' + delay)

        this.tl.to(portables, 0.7, {
          autoAlpha: 0,
          ease: Circ.easeOut
        }, '+=' + delay)
      }

      this.tl.from('.closer-screen', 1, {
        autoAlpha: 0,
        scale: 1.1,
        ease: Back.easeOut
      }, '-=0.2')

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
