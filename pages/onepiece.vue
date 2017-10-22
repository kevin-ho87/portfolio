<template>
  <div class="page-onepiece">
    <div class="bg-fill bg-fill_map"></div>
    <div class="bg-fill bg-fill_devil"></div>

    <div class="box-magic">
      <div class="slide-fruit-holder">
        <div class="box-magic__slide slide-fruit slide-fruit_1"></div>
        <div class="box-magic__slide slide-fruit slide-fruit_2"></div>
        <div class="box-magic__slide slide-fruit slide-fruit_3"></div>
      </div>

      <div class="box-magic__slide slide-char box-magic__slide_1"></div>
      <div class="box-magic__slide slide-char box-magic__slide_2"></div>
      <div class="box-magic__slide slide-char box-magic__slide_3"></div>
      <div class="box-magic__slide slide-char box-magic__slide_4"></div>
    </div>
    <div class="section section_intro">
      <div class="container">
        <div class="col section__col">
          <h1 class="title-hero">One piece</h1>
          <p>One piece anime page tribute prototyping. Background change colour.</p>
        </div>
      </div>
    </div>
    <div class="section section_characters">
      <div class="container">

        <img src="/img/onepiece/bounties.jpg" alt="" class="img-border char-img char-img_bounties">
        <img src="/img/onepiece/chars-1.jpg" alt="" class="img-border char-img char-img_crew-1">
        <img src="/img/onepiece/chars-2.jpg" alt="" class="img-border char-img char-img_crew-2">
        <img src="/img/onepiece/chopper.jpg" alt="" class="img-border char-img char-img_chopper">

        <div class="col section__col">

        </div>
        <div class="col section__col">
          <div class="textbox textbox_characters">
            <h3>Characters</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dicta sint, quas debitis, quam dignissimos. Ex quaerat fugiat obcaecati itaque explicabo, inventore eos, atque dolor, provident fuga, quibusdam eaque.</p>
            <img src="/img/onepiece/luffy-gold.png" alt="" class="textbox__luffy">
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="col section__col">
          <div class="textbox">
            <h3>Devil fruit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dicta sint, quas debitis, quam dignissimos. Ex quaerat fugiat obcaecati itaque explicabo, inventore eos, atque dolor, provident fuga, quibusdam eaque.</p>
          </div>
        </div>
        <div class="col section__col">

        </div>
      </div>
    </div>
    <div class="section section_closer">
      <img src="/img/onepiece/sunny.jpg" alt="" class="img-border img-closer closer_sunny">
      <img src="/img/onepiece/warlords.jpg" alt="" class="img-border img-closer closer_warlords">
      <img src="/img/onepiece/vivre.jpg" alt="" class="img-border img-closer closer_vivre">
      <img src="/img/onepiece/sugar.jpg" alt="" class="img-border img-closer closer_sugar">
      <img src="/img/onepiece/impel-alliance.jpg" alt="" class="img-border img-closer closer_impel">
      <img src="/img/onepiece/shanks-hat.jpg" alt="" class="img-border img-closer closer_shanks-hat">

      <div class="container">
      </div>
    </div>

    <footer class="footer-onepiece">
      <div class="container">
        <div class="col">
          <p>Content retrieved from <a href="http://onepiece.wikia.com/wiki/One_Piece_Wiki" target="_blank" rel="noopener">One Piece Wiki</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { TweenLite, TimelineMax, Circ, Back } from 'gsap'

export default {
  mounted () {
    if (process.browser && window.innerWidth > 520) {
      window.addEventListener('scroll', this.handleScroll)

      this.mainTimeline()
      this.cardsRotateIn()
      this.slideUpChange()
      this.backgroundChange()
    }
  },
  methods: {
    mainTimeline () {
      this.tl = new TimelineMax({paused: true})

      const elem = '.box-magic'
      TweenLite.set('.char-img, .img-closer', {autoAlpha: 0})

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
      this.tl.to(elem, 1, {
        x: '-55%', rotationY: 20, ease: Back.easeOut
      })
      this.tl.to(elem, 0.3, {
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
    },
    cardsRotateIn () {
      this.tlCards = new TimelineMax({paused: true})

      // Character cards rotating in
      this.tlCards.staggerTo('.char-img', 1, {
        autoAlpha: 1,
        cycle: {
          rotation: [6, -5, 3, -4]
        },
        ease: Circ.easeInOut
      }, 0.1, '+=1')

      this.tlCards.staggerTo('.img-closer', 1, {
        autoAlpha: 1,
        cycle: {
          rotation: [6, -5, 3, -4]
        },
        ease: Circ.easeInOut
      }, 0.1, '+=2')
    },
    slideUpChange () {
      this.tlSlides = new TimelineMax({paused: true})
      // hero box inner character cards sliding up
      this.tlSlides.staggerTo('.slide-char', 1, { y: '-100%', ease: Circ.easeInOut }, 1, '+=1')
      // hero box inner devil fruit cards sliding up
      this.tlSlides.staggerTo('.slide-fruit', 1, { y: '-105%', ease: Circ.easeInOut }, 1, '+=1')
      this.tlSlides.to('.slide-char', 0, {}, '+=1')
    },
    backgroundChange () {
      this.bgTl = new TimelineMax({ paused: true })
      this.bgTl.to('.bg-fill_devil', 0.7, { autoAlpha: 1, ease: Circ.easeOut }, '+=1.5')
      this.bgTl.to('.bg-fill_devil', 0.7, { autoAlpha: 0, ease: Circ.easeOut }, '+=1.5')
    },
    handleScroll () {
      let scrollPerc = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
      this.tl.progress(scrollPerc)
      this.bgTl.progress(scrollPerc)
      this.tlSlides.progress(scrollPerc)
      this.tlCards.progress(scrollPerc)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-onepiece {
  color: #444;
  overflow: hidden;
}

.bg-fill {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &_map {

    background-image: url('/img/onepiece/bg.jpg');
  }

  &_devil {
    opacity: 0;
    background-image: url('/img/onepiece/devil-fruits.jpg');
    background-size: cover;
    background-position: 50% 50%;
  }
}

.section {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100vh;

  &_intro {
    color: #fff;
  }

  &_characters {
    z-index: 2;
  }

  @media screen and (max-width: 520px) {
    &_closer {
      height: 50vh;
    }
  }

  .container {
    height: 100%;
    align-items: center;
  }

  @media screen and (min-width: 521px) {
    &__col {
      max-width: 50%;
      flex: 0 0 50%;
    }
  }
}

@media screen and (min-width: 521px) {
  .title-hero {
    font-size: 5rem;
  }
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
  z-index: 4;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  border: 10px solid #fff;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(#000, .3);
  @media screen and (max-width: 520px) {
    display: none;
  }
}

.box-magic,
.box-magic__slide_1 {
  background-image: url('/img/onepiece/logo.jpg');
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.box-magic__slide {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  &_1 {
    background-image: url('/img/onepiece/logo.jpg');
    z-index: 4;
  }

  &_2,
  &_3,
  &_4 {
    background-size: cover;
    background-position: 50% 0;
  }

  &_2 {
    background-image: url('/img/onepiece/luffy.jpg');
    z-index: 3;
  }

  &_3 {
    background-image: url('/img/onepiece/zoro.jpg');
    z-index: 2;
  }

  &_4 {
    background-image: url('/img/onepiece/nami.jpg');
    z-index: 1;
  }
}

.slide-fruit-holder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.slide-fruit {
  background-size: cover;
  background-position: 50% 50%;

  &_1 {
    background-image: url('/img/onepiece/fruit-1.jpg');
    z-index: 3;
  }

  &_2 {
    background-image: url('/img/onepiece/fruit-2.jpg');
    z-index: 2;
  }

  &_3 {
    background-image: url('/img/onepiece/fruit-3.jpg');
    z-index: 1;
  }
}

//Textbox
.textbox {
  background-color: #fff;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(238,238,238,1) 100%);
  position: relative;
  z-index: 2;
  padding: 20px 20px 40px;
  box-shadow: 0 4px 4px rgba(#000, 0.3);

  &_characters {
    padding-right: 30%;
  }

  &__luffy {
    position: absolute;
    top: -40px;
    right: 0;
    width: 35%;
    filter: drop-shadow(0 0 60px #fff);
  }

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}

.img-border {
  position: absolute;
  border: 10px solid #fff;
  box-shadow: 0 4px 12px rgba(#000, 0.3);
  display: block;
  height: auto;
}

.char-img {
  &_crew-1 {
    top: 5%;
    right: 0;
    width: 40%;
  }

  &_crew-2 {
    top: 70%;
    right: 0;
    width: 40%;
    z-index: 3;
  }

  &_bounties {
    top: 0;
    left: 0;
    width: 70%;
  }

  &_chopper {
    width: 20%;
    left: 5%;
    bottom: -10%;
  }
}

.closer {
  &_sunny {
    top: -50px;
    left: 0;
    width: 40%;
  }

  &_warlords {
    width: 45%;
    top: 20px;
    left: 35%;
  }

  &_vivre {
    width: 20%;
    top: 0;
    right: 0;
  }

  &_sugar {
    bottom: 0;
    left: -20px;
    width: 35%;
  }

  &_impel {
    bottom: -20px;
    left: 30%;
    width: 40%;
  }

  &_shanks-hat {
    right: 0;
    bottom: 0;
    width: 30%;
  }
}

.footer-onepiece {
  position: relative;
  color: #fff;
  padding-bottom: 20px;
  margin-top: 100px;
  border-top: 1px solid rgba(#fff, 0.3);

  .container {
    padding-top: 20px;
  }

  a {
    color: inherit;
  }
}

</style>