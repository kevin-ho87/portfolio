<template>
  <div class="page-tiktok">
    <div class="row row-hero">
      <div class="container">
        <div class="col row-hero__col-main">
          <h1 class="row-hero__title">TikTok</h1>
        </div>
        <div class="hero-watch fade-change">
          <img :src="selectedModel.heroImage" alt="">
        </div>
        <div class="col row-hero__col-text">
          <p>Tribute to the greatest tools of time. Here are my choices for your everyday beater chronograph watch, haute horology, and dress watch.</p>
        </div>
      </div>
    </div>
    <div class="row-watch-cta-holder">
      <div id="ctas" class="row row-watch-cta" :class="{ 'row-watch-cta_over': isCtasSticky}">
        <div class="container">
          <label v-for="watch in watches" class="watch-select">
            <input class="watch-select__label" type="radio" v-model="selectedWatch" :value="watch.model">
            <span class="watch-select__inner" :style="{ backgroundImage: `url('${watch.heroImage}')` }">
              <span class="watch-select__brand">{{ watch.brand }}</span>
              <span class="watch-select__name">{{ watch.model }}</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="row row-details">
      <div class="container">
        <div class="col row-details__col-main">
          <h3 class="row-details__title">Overview</h3>
          <div v-html="selectedModel.description"></div>
        </div>
        <div class="col row-details__col-sub">
          <h3 class="row-details__title">Details</h3>
          <dl class="specs">
            <div class="specs__row" v-for="(value, key) in selectedModel.specs">
              <dt>{{ key | capitalize }}:</dt>
              <dd>{{ value | capitalize }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="grid">
        <div class="img-box fade-change" v-for="imgSrc in selectedModel.images">
          <img :src="imgSrc" alt="">
        </div>
      </div>
    </div>
    <footer>
      <div class="container footer-tiktok">
        <div class="col">
          <p>All images and details were retrieved from <a href="https://www.omegawatches.com/planet-omega/60th-anniversary-speedmaster/alaska-project-2008" target="_blank" rel="noopener">Omega</a>, <a href="https://www.fpjourne.com/en/collections" target="_blank" rel="noopener">F.P. Journe</a>, <a href="https://www.alange-soehne.com/en/timepieces/saxonia/#saxonia-thin-37mm/introduction/201-027" target="_blank" rel="noopener">A. Lange &amp; Söhne</a>, and <a href="https://www.hodinkee.com/" target="_blank" rel="noopener">Hodinkee</a>.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import _ from 'lodash'
import { TimelineMax, TweenMax, Circ, Back } from 'gsap'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      let tl = new TimelineMax({ onComplete: done })

      tl.from('.hero-watch', 0.7, {
        autoAlpha: 0,
        scale: 0,
        ease: Circ.easeOut
      })

      tl.from('.row-hero__col-main, .row-hero__col-text', 0.7, {
        autoAlpha: 0,
        ease: Circ.easeInOut
      }, '-=.4')

      tl.fromTo('.header', 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Circ.easeOut })
    },
    leave (el, done) {
      let tl = new TimelineMax({ onComplete: done })

      tl.fromTo('.header', 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: Circ.easeOut })

      tl.staggerTo('.row-hero__col-main, .hero-watch, .row-hero__col-text', 0.7, {
        y: -100,
        autoAlpha: 0,
        ease: Back.easeIn
      }, 0.1)

      tl.to(el, 0.7, { autoAlpha: 0, ease: Circ.easeOut }, '-=0.1')
    }
  },
  data () {
    return {
      isCtasSticky: false,
      selectedWatch: 'alaska project',
      watches: [
        {
          brand: 'Omega',
          model: 'alaska project',
          heroImage: 'img/tiktok/alaska.png',
          description: '<p>Introduced in 2008 with a limited number of 1970 pieces. 1970 being the year that Omega developed the first Alaska Project moonwatch. The outer red aluminium casing was made to withstand greater temperatures. I just love the design and history behind this timepiece. The symmetry of the sub dials and the asymmetry of the shuttle hands greatly complement each other. The red chronograph seconds hand tops it off as the icing on the cake.</p>',
          specs: {
            case: 'steel',
            diameter: '42mm',
            glass: 'hesalite',
            dial: 'white'
          },
          images: ['img/tiktok/alaska-1.jpg', 'img/tiktok/alaska-2.jpg', 'img/tiktok/alaska-3.jpg', 'img/tiktok/alaska-4.jpg']
        },
        {
          brand: 'F.P. Journe',
          model: 'chronometre resonance',
          heroImage: 'img/tiktok/resonance.png',
          description: 'Two time zones synchronised by the natural resonance phenomenon, incredible. F.P. Journe never ceases to amaze with their creativity and engineering working in harmony.',
          specs: {
            movement: 'manual',
            case: 'platinum',
            diameter: '40mm',
            dial: 'white gold and silver'
          },
          images: ['img/tiktok/resonance-1.jpg', 'img/tiktok/resonance-2.jpg', 'img/tiktok/resonance-3.jpg', 'img/tiktok/resonance-4.jpg']
        },
        {
          brand: 'F.P. Journe',
          model: 'tourbillon souverain',
          heroImage: 'img/tiktok/tourbillon.png',
          description: 'Best tourbillon watch in the world. The Tourbillon Souverain is coupled with the constant force and dead beat seconds for improved accuracy. The tourbillon is a balance wheel in a rotating cage. This was done back in the day to distribute lubricants evenly throughout the escapement.',
          specs: {
            movement: 'manual',
            case: 'platinum',
            diameter: '40mm',
            dial: 'white gold and silver'
          },
          images: ['img/tiktok/tourbillon-1.jpg', 'img/tiktok/tourbillon-2.jpg', 'img/tiktok/tourbillon-3.jpg', 'img/tiktok/tourbillon-4.jpg']
        },
        {
          brand: 'A. Lange & Söhne',
          model: 'saxonia thin',
          heroImage: 'img/tiktok/saxonia.png',
          description: 'Silver/white gold case, white dial, hour and minutes hands only. This is the true definition of a dress watch. One thing I like about Lange is the way they treat all their watches with equal care. This entry level piece has the same level of finishing as their high end pieces.',
          specs: {
            movement: 'manual',
            case: 'white gold',
            diameter: '37mm',
            dial: 'Solid silver, argenté'
          },
          images: ['img/tiktok/alange-1.jpg', 'img/tiktok/alange-2.jpg', 'img/tiktok/alange-3.jpg', 'img/tiktok/alange-4.jpg']
        }
      ]
    }
  },
  computed: {
    selectedModel () {
      let $vm = this
      return _.find($vm.watches, item => {
        return item.model === $vm.selectedWatch
      })
    },
    ctasOffset () {
      return document.getElementById('ctas').offsetTop
    }
  },
  watch: {
    selectedModel () {
      TweenMax.set('.fade-change', {autoAlpha: 0})
      TweenMax.staggerFromTo('.fade-change', 0.7, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Circ.easeInOut
      }, 0.1)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted () {
    if (process.browser && window.innerWidth > 800) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > this.ctasOffset) {
        this.isCtasSticky = true
      } else {
        this.isCtasSticky = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-tiktok {
  color: #444;
  line-height: 1.4;
}
.row {
  position: relative;
  overflow: hidden;
}

.row-hero {
  background-color: #eee;
  @media screen and (min-width: 801px) {
    height: 100vh;
  }
  @media screen and (max-width: 800px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  &__title {
    @media screen and (min-width: 801px) {
      font-size: 6rem;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .container {
    height: 100%;
    @media screen and (min-width: 801px) {
      justify-content: space-between;
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }

  @media screen and (min-width: 801px) {
    .col {
      display: flex;
      align-items: center;
    }

    &__col-main {
      flex: 0 0 30%;
    }

    &__col-text {
      flex: 0 0 30%;
    }
  }
}

// TikTok - custom input
.watch-select {
  @media screen and (max-width: 800px) {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @media screen and (min-width: 801px) {
    max-width: 25%;
    flex: 0 0 25%;
  }
  background-color: #DCDCDC;
  background: linear-gradient(to right, rgba(238,238,238,1) 0%,rgba(220,220,220,1) 100%);
  display: inline-block;
  position: relative;
  cursor: pointer;

  &__inner {
    height: 100%;
    display: block;
    padding-left: 30%;
    padding-right: 1rem;
    @media screen and (max-width: 520px) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    @media screen and (min-width: 521px) {
      padding-top: 4rem;
      padding-bottom: 2rem;
    }
    background-repeat: no-repeat;
    background-size: 25% auto;
    background-position: 10px 50%;
    transition: padding .3s ease-in-out,
    background-color .3s ease-in-out;
  }

  &__brand {
    display: block;
    font-weight: bold;
    font-size: .9rem;
    transition: font-size .3s ease-in-out;
  }

  &__name {
    display: block;
    transition: font-size .3s ease-in-out;
    @media screen and (min-width: 521px) {
      font-size: 1.5rem;
    }
  }

  &__label {
    opacity: 0;
    position: absolute;
  }

  &__label:checked ~ .watch-select__inner {
    background-color: #444;
    color: #fff;
  }
}

// Grid test
.grid {
  width: 100%;
  @media screen and (min-width: 801px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 200px 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    display: flex;
  }
  @media screen and (max-width: 520px) {
    flex-wrap: wrap;
  }
}
.img-box {
  background-color: #fff;
  @media screen and (max-width: 520px) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: 521px) and (max-width: 800px) {
    flex: 0 0 25%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  &:nth-child(2) {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
  }
  &:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 2;
  }
}

// Watch stats section
@media screen and (min-width: 801px) {
  .row-watch-cta-holder {
    height: 180px;
  }
}
.row-details {
  background-color: #fff;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media screen and (min-width: 801px) {
    padding-top: 15rem;
    padding-bottom: 15rem;
  }

  @media screen and (max-width: 520px) {
    .container {
      display: block;
    }
  }

  &__col-main {
    flex: 0 0 50%;
    margin-right: auto;
    @media screen and (min-width: 801px) {
      flex: 0 0 35%;
    }
  }
  &__col-sub {
    flex: 0 0 40%;
    @media screen and (min-width: 801px) {
      flex: 0 0 30%;
    }
  }

  &__title {
    text-transform: uppercase;
  }
}

.specs {
  &__row {
    display: flex;
    margin-bottom: .5rem;

    dt {
      flex: 0 0 100px;
    }

    dd {
      flex: 1 1 auto;
    }
  }
}

.row-watch-cta {
  display: flex;
  background-color: #eee;
  z-index: 3;

  &_over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    .watch-select__inner {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .watch-select__brand {
      font-size: .8rem;
    }
    .watch-select__name {
      font-size: 1rem;
    }
  }
}

.hero-watch {
  @media screen and (max-width: 800px) {
    position: static;
    width: 300px;
    height: 390px;
  }
  @media screen and (min-width: 801px) {
    position: fixed;
    width: 350px;
    height: 450px;
  }
  left: 0;
  right: 0;
  top: calc((100% - 400px) / 2);
  margin-left: auto;
  margin-right: auto;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
}

// Footer
.footer-tiktok {
  font-size: .9rem;
  margin-top: 4rem;
  @media screen and (min-width: 801px) {
    margin-top: 15rem;
  }

  a {
    text-decoration: underline;
    color: currentColor;
  }

  .col {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid #dcdcdc;
    width: 100%;
  }
}

</style>
