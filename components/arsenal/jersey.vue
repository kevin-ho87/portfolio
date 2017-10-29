<template>
  <div id="jersey-holder" class="jersey-holder">
    <img src="~/assets/img/arsenal/jersey-home.jpg" alt="" id="jersey-home" class="jersey-resize jersey-home" :style="maskX">
    <img src="~/assets/img/arsenal/jersey-away.jpg" alt="" class="jersey-resize">
    <div class="drag-overlay"></div>
    <div class="drag-item"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maskXPos: 200,
      holderWidth: 400,
      holderHeight: 400
    }
  },
  computed: {
    maskX () {
      return `clip: rect(0px, ${this.maskXPos}px, ${this.holderHeight}px, 0px)`
    }
  },
  mounted () {
    if (process.browser) {
      this.createDraggable()

      setTimeout(() => {
        const box = document.getElementById('jersey-home').getBoundingClientRect()
        // console.log(box)
        this.holderWidth = box.width
        this.holderHeight = box.height
        this.maskXPos = this.holderWidth / 2
      }, 300)
    }
  },
  methods: {
    createDraggable () {
      let $vm = this
      const dragItemCenter = 10
      const Draggable = require('gsap/Draggable')

      Draggable.create('.drag-item', {
        type: 'x',
        bounds: '.jersey-holder',
        onDrag (e) {
          $vm.maskXPos = this.x + this.maxX + dragItemCenter
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// Jersey
.jersey-holder {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
}
.jersey-resize {
  width: 100%;
  height: auto;
}
.jersey-home {
  position: absolute;
  display: block;
}

.drag-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.drag-item {
  width: 20px;
  height: 100px;
  background-color: #fff;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 10px);
  z-index: 3;
  border: 3px solid #f00000;
  border-radius: 5px;
  cursor: pointer;
}

</style>