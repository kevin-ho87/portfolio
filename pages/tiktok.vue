<template>
  <div class="page-tiktok">



    <div class="row row-hero">
      <div class="container">
        <div class="col row-hero__col-main">
          <h1 class="row-hero__title">TikTok</h1>
        </div>
        <div class="col row-hero__col-text">
          <p>Tribute to the greatest tools of time, watches. Here are my choices for your everyday beater chronograph watch, haute horology, and dress watch.</p>
        </div>

      </div>
    </div>

    <div class="hero-watch">
      <img :src="selectedModel.heroImage" alt="">
    </div>

    <div class="row row-watch-cta">
      <label v-for="watch in watches" class="watch-select">
        <input class="watch-select__label" type="radio" v-model="selectedWatch" :value="watch.model">
        <span class="watch-select__inner" :style="{ backgroundImage: `url('${watch.heroImage}')` }">
          <span class="watch-select__brand">{{ watch.brand }}</span>
          <span class="watch-select__name">{{ watch.model }}</span>
        </span>
      </label>
    </div>


    <div class="row row-details">
      <div class="container">
        <div class="col row-details__col-main">
          <h3 class="row-details__title">Overview</h3>
          <div v-html="selectedModel.description"></div>
        </div>

        <div class="row-details__col-sub">
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
        <div class="img-box" v-for="imgSrc in selectedModel.images">
          <img :src="imgSrc" alt="">
        </div>
      </div>
    </div>
    <footer>
      <p>Display 4 watches data.</p>
      <p>https://www.omegawatches.com/planet-omega/60th-anniversary-speedmaster/alaska-project-2008</p>
      <p>https://www.fpjourne.com/en/collection/souveraine-collection/chronometre-resonance</p>
      <p>https://www.fpjourne.com/en/collection/souveraine-collection/tourbillon-souverain</p>
      <p>https://www.alange-soehne.com/en/timepieces/saxonia/#saxonia-thin-37mm/introduction/201-027</p>
      <p>https://www.hodinkee.com/</p>
      <ul>
        <li>Alaska Project</li>
        <li>Tourbillon Souverain</li>
        <li>Chronometre Resonance</li>
        <li>Saxonia Thin</li>
      </ul>
    </footer>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      selectedWatch: 'alaska project',
      watches: [
        {
          brand: 'Omega',
          model: 'alaska project',
          heroImage: 'img/tiktok/alaska.png',
          description: '<p>In this timepiece, one of OMEGA’s most innovative dreams became reality. Created in a limited edition of 1,970 pieces in 2008, the watch is based on the “Alaska II” project.</p>',
          specs: {
            case: 'steel',
            diameter: '42mm',
            glass: 'hesalite',
            dial: 'white'
          },
          images: ['https://www.omegawatches.com/speedmaster-60-bo/img/watches/2017-01-24%2014-17-22%20(B,Radius8,Smoothing4).jpg', 'https://www.omegawatches.com/speedmaster-60-bo/img/watches/2008---Alaska-Project-1861DOC2.jpg', 'https://www.omegawatches.com/speedmaster-60-bo/img/watches/2008---Alaska-Project-1861.png', 'https://www.omegawatches.com/speedmaster-60-bo/img/watches/2008---Alaska-Project-1861DOC3.jpg']
        },
        {
          brand: 'F.P. Journe',
          model: 'chronometre resonance',
          heroImage: 'img/tiktok/resonance.png',
          description: 'f.p. journe commemorates the 10 year anniversary of the renowned chronomètre à résonance with a new edition now featuring a 24 hour indicator.',
          specs: {
            movement: 'manual',
            case: 'platinum',
            diameter: '40mm',
            dial: 'white gold and silver'
          },
          images: ['https://hodinkee.imgix.net/uploads/block/inline_image/content_image/9783/FPJ274.jpg?ixlib=rails-1.1.0&auto=format&ch=Width%2CDPR%2CSave-Data&fit=crop&fm=jpg&q=55&usm=12&w=700&s=4af2ad826cd5b12996aed41b279d62f0', 'https://www.fpjourne.com/sites/default/files/styles/image_de_montre/public/declination/FPJ-Co-Souveraine-Resonance-CuirPl-G-D.png?itok=C81cr5__', 'img/tiktok/resonance-movement.jpg']
        },
        {
          brand: 'F.P. Journe',
          model: 'tourbillon souverain',
          heroImage: 'img/tiktok/tourbillon.png',
          description: 'in 1999, françois-paul journe launched his f.p.journe -invenit et fecit- brand with the tourbillon souverain, the first model in the souveraine collection and the only tourbillon wristwatch with a remontoire (constant force device) and dead beat seconds.',
          specs: {
            movement: 'manual',
            case: 'platinum',
            diameter: '40mm',
            dial: 'white gold and silver'
          },
          images: ['https://www.fpjourne.com/sites/default/files/styles/image_de_montre/public/declination/FPJ-Co-Souveraine-Tourbillon-CuirPl-Dos_0.png?itok=dDY-OzFj', 'https://www.fpjourne.com/sites/default/files/styles/image_de_montre/public/declination/FPJ-Co-Souveraine-Tourbillon-CuirPl-G-D_0.png?itok=uwPxWRAt', 'img/tiktok/tourbillon-movement.jpg']
        },
        {
          brand: 'A. Lange & Söhne',
          model: 'saxonia thin',
          heroImage: 'img/tiktok/saxonia.png',
          description: 'With its case height of merely 5.9 millimetres, the SAXONIA THIN is the flattest watch crafted by Lange so far. Five years after its debut, the two-hand watch now features a subtly reworked dial that corresponds to the design of the SAXONIA models presented in 2015. The new SAXONIA THIN with a case diameter of 37.0 millimetres is available exclusively in 18-carat pink or white gold.',
          specs: {
            movement: 'manual',
            case: 'white gold',
            diameter: '37mm',
            dial: 'Solid silver, argenté'
          },
          images: ['https://hodinkee.imgix.net/uploads/images/1467912800213-cwo33ot8g645dqif-734b05eadfd8d4b8de97a68ebb1720f6/P7050090.jpg?ixlib=rails-1.1.0&auto=format&ch=Width%2CDPR%2CSave-Data&fit=crop&fm=jpg&q=55&usm=12&w=700&s=0b75e4c06ce8ad8e73eb4da1bac786e0', 'https://hodinkee.imgix.net/uploads/images/1467921671607-mntrmwey39l7ykq7-257208e35414da4d6285aa7d0f853e99/P7070077.jpg?ixlib=rails-1.1.0&auto=format&ch=Width%2CDPR%2CSave-Data&fit=crop&fm=jpg&q=55&usm=12&w=700&s=84252b7d0723461abe8e6a301974eab9', 'https://www.alange-soehne.com/assets/GalleryImage-2880x1800-px/LANGE-SAXONIA-THIN-UW-ALS-L093-1-2.jpg', 'https://hodinkee.imgix.net/uploads/images/1467913864099-y2fbfqm74uwo5szb-6a759a154057cefe10ad43957cfa6f39/P7050098.jpg?ixlib=rails-1.1.0&auto=format&ch=Width%2CDPR%2CSave-Data&fit=crop&fm=jpg&q=55&usm=12&w=700&s=4ded95451dcaf34a4d02ece3b69d47dd']
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
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
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
  // background-color: #eee;
  // height: 100vh;
  // border-bottom: 1px solid #444;

}

.hero-watch {
  width: 350px;
  height: 450px;
  position: fixed;
  left: 0;
  right: 0;
  top: calc((100% - 400px) / 2);
  margin-left: auto;
  margin-right: auto;

  z-index: 2;
  // background-color: green;

  img {
    width: 100%;
    height: auto;
  }
}

</style>