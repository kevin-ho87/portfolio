<template>
  <div class="section-snippets"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
  >

  <ProjectSnippetBox v-for="(box, index) in boxes"
    :item="box"
    :index="index"
    :key="index"
    :movement="movement"
    :valToDrag="valToDrag"
  ></ProjectSnippetBox>

  </div>
</template>

<script>
// import { TweenLite } from 'gsap'
import ProjectSnippetBox from '~/components/ProjectSnippetBox'

export default {
  components: {
    ProjectSnippetBox
  },
  data () {
    return {
      isDrag: false,
      startX: 0,
      movement: 0,
      boxX: 0,
      valToDrag: 0,
      boxes: ['aaa', 'bbb', 'c']
    }
  },
  mounted () {
    // TweenLite.set('.box', {x: this.boxX})
  },
  methods: {
    startDrag (e) {
      this.isDrag = true
      this.startX = e.pageX
      // console.log(e.pageX, e.pageY)
    },
    onDrag (e) {
      if (this.isDrag) {
        this.movement = e.pageX - this.startX
        this.valToDrag = this.boxX + this.movement
        // TweenLite.set('.box', {x: this.boxX + this.movement})
      }
    },
    stopDrag () {
      if (this.isDrag) {
        this.isDrag = false
        this.boxX = this.boxX + this.movement
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
