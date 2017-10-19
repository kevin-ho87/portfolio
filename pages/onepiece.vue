<template>
  <div class="page-onepiece">
    <div class="section">
      <div class="container">
        <div class="col section__col">
          <h1 class="title-hero">One piece</h1>
          <p>One piece anime page tribute prototyping. Background change colour.</p>
          <p>http://onepiece.wikia.com/wiki/Straw_Hat_Pirates</p>
          <ol>
            <li>Hero page</li>
            <li>Straw hat pirates</li>
            <li>Devil fruits</li>
          </ol>

        </div>
        <div class="col section__col">
          <div class="box-magic">
            <div class="box-magic__slide box-magic__slide_1"></div>
            <div class="box-magic__slide box-magic__slide_1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="col section__col">

        </div>
        <div class="col section__col">
          <h3>Characters</h3>
          <p>popups?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dicta sint, quas debitis, quam dignissimos. Ex quaerat fugiat obcaecati itaque explicabo, inventore eos, atque dolor, provident fuga, quibusdam eaque.</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="col section__col">
          <h3>Devil fruit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dicta sint, quas debitis, quam dignissimos. Ex quaerat fugiat obcaecati itaque explicabo, inventore eos, atque dolor, provident fuga, quibusdam eaque.</p>
        </div>
        <div class="col section__col">

        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="col section__col">

        </div>
        <div class="col">
          <h3>Closer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dicta sint, quas debitis, quam dignissimos. Ex quaerat fugiat obcaecati itaque explicabo, inventore eos, atque dolor, provident fuga, quibusdam eaque.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, TimelineMax, Circ, Back } from 'gsap'

export default {
  mounted () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }

    this.tl = new TimelineMax({paused: true})
    // this.tl = new TimelineMax()
    const elem = '.box-magic'

    TweenLite.set(elem, {
      z: '0.01',
      transformStyle: 'preserve-3d',
      transformPerspective: 500,
      transformOrigin: '50% 50%'
    })

    // to left
    this.tl.to(elem, 1, {
      scale: 0.7, rotationY: -20, rotationX: -10, ease: Circ.easeInOut
    })
    this.tl.add('gg')
    this.tl.to(elem, 1, {
      x: '-55%', rotationY: 20, ease: Back.easeOut
    }, 'gg')
    this.tl.to('.box-magic__slide', 0.5, {y: '-100%', ease: Circ.easeInOut}, 'gg')
    this.tl.to(elem, 1, {
      scale: 1, rotationY: 0, rotationX: 0, ease: Circ.easeInOut
    })

    // to right
    this.tl.to(elem, 1, {
      scale: 0.6, rotationY: 25, rotationX: -10, ease: Circ.easeInOut
    }, '+=1')
    this.tl.to(elem, 1, {
      x: '55%', rotationY: -25, ease: Back.easeOut
    })
    this.tl.to(elem, 1, {
      scale: 1, rotationY: 0, rotationX: 0, ease: Back.easeOut
    })

    // to middle
    this.tl.to(elem, 1, {
      scale: 0.7, rotationY: -15, rotationX: -10, ease: Circ.easeInOut
    }, '+=1')
    this.tl.to(elem, 1, {
      x: '0%', rotationY: 15, ease: Back.easeOut
    })
    this.tl.to(elem, 1, {
      width: '80%', maxWidth: 800, height: '55%', scale: 1, rotationY: 0, rotationX: 0, ease: Back.easeOut
    })

    this.backgroundChange()
  },
  methods: {
    backgroundChange () {
      this.bgTl = new TimelineMax({ paused: true })
      this.bgTl.to('.page-onepiece', 1, { backgroundColor: '#E0EEEE', ease: Circ.easeOut })
      this.bgTl.to('.page-onepiece', 1, { backgroundColor: '#79CDCD', ease: Circ.easeOut })
      this.bgTl.to('.page-onepiece', 1, { backgroundColor: '#D1EEEE', ease: Circ.easeOut })
    },
    handleScroll () {
      let scrollPerc = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
      this.tl.progress(scrollPerc)
      this.bgTl.progress(scrollPerc)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-onepiece {
  color: #444;
  background-color: #ADEAEA;
}
.section {
  height: 100vh;

  .container {
    height: 100%;
    align-items: center;
  }

  &__col {
    max-width: 50%;
    flex: 0 0 50%;
  }
}
.section:nth-child(odd) {
  // background-color: #eee;
}
.section:nth-child(even) {
  // background-color: papayawhip;
}
.title-hero {
  font-size: 5rem;
}

.box-magic {
  transform: translate(55%, 0%) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0.01, 1);
  width: calc(50% - 40px);
  max-width: 550px;
  height: 50%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  // background-color: lightblue;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(#000, .3);

  &__slide {
    background-color: #444;
    width: 100%;
    height: 100%;

    &_1 {
      background-image: url('https://vignette.wikia.nocookie.net/onepiece/images/7/75/One_Piece_Logo.png/revision/latest?cb=20161004023941');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50% 50%;
    }
  }
}



</style>