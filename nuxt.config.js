module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700' }
    ]
  },
  /* Project data */
  env: {
    projects: [
      {
        id: 1,
        path: 'nintendo',
        title: 'Yours to play',
        description: 'Lorem ipsum dolor sit amet.',
        url: 'https://www.nintendo.com.au/yours-to-play/',
        logo: 'nintendo-logo.png',
        color: '#E60012',
        tech: 'Greensock, jQuery, HTML5, CSS3',
        year: '2016',
        info: 'Front end. lorem.',
        gifs: ['desktop-nintendo-1.jpg', 'desktop-nintendo-1.jpg', 'desktop-nintendo-1.jpg', 'desktop-nintendo-1.jpg', 'desktop-nintendo-1.jpg'],
        screenshots: [
          {
            desktop: 'desktop-nintendo-1.jpg',
            tablet: 'tablet-nintendo-1.jpg',
            mobile: 'mobile-nintendo-1.jpg'
          },
          {
            desktop: 'desktop-nintendo-2.jpg',
            tablet: 'tablet-nintendo-2.jpg',
            mobile: 'mobile-nintendo-2.jpg'
          }
        ]
      },
      {
        id: 2,
        path: 'mind',
        title: 'Mind Australia',
        description: 'Lorem ipsum dolor sit amet.',
        url: 'https://www.nintendo.com.au/yours-to-play/',
        logo: 'nintendo-logo.png',
        color: '#A0148C',
        tech: 'Greensock, jQuery, HTML5, CSS3',
        year: '2017',
        info: 'Front end. lorem.',
        gifs: ['desktop-mind-1.jpg', 'desktop-mind-2.jpg'],
        screenshots: [
          {
            desktop: 'desktop-mind-1.jpg',
            tablet: 'tablet-mind-1.jpg',
            mobile: 'mobile-mind-1.jpg'
          },
          {
            desktop: 'desktop-mind-2.jpg',
            tablet: 'tablet-mind-2.jpg',
            mobile: 'mobile-mind-2.jpg'
          }
        ]
      },
      {
        id: 3,
        path: 'cav',
        title: 'Party for your rights',
        description: 'Lorem ipsum dolor sit amet.',
        url: 'https://www.nintendo.com.au/yours-to-play/',
        logo: 'nintendo-logo.png',
        color: '#A0148C',
        tech: 'Greensock, jQuery, HTML5, CSS3',
        year: '2017',
        info: 'Front end. lorem.',
        gifs: ['desktop-cav-1.jpg', 'desktop-cav-2.jpg'],
        screenshots: [
          {
            desktop: 'desktop-cav-1.jpg',
            tablet: 'desktop-cav-1.jpg',
            mobile: 'mobile-cav-1.jpg'
          },
          {
            desktop: 'desktop-cav-2.jpg',
            tablet: 'desktop-cav-2.jpg',
            mobile: 'mobile-cav-2.jpg'
          }
        ]
      },
      {
        id: 4,
        path: 'telstra',
        title: 'Telstra exchange',
        description: 'Lorem ipsum dolor sit amet.',
        url: 'https://www.nintendo.com.au/yours-to-play/',
        logo: 'nintendo-logo.png',
        color: '#A0148C',
        tech: 'Greensock, jQuery, HTML5, CSS3',
        year: '2017',
        info: 'Front end. lorem.',
        gifs: ['desktop-telstra-1.jpg', 'desktop-telstra-2.jpg'],
        screenshots: [
          {
            desktop: 'desktop-telstra-1.jpg',
            tablet: 'tablet-telstra-1.jpg',
            mobile: 'mobile-telstra-1.jpg'
          },
          {
            desktop: 'desktop-telstra-2.jpg',
            tablet: 'tablet-telstra-2.jpg',
            mobile: 'mobile-telstra-2.jpg'
          }
        ]
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  css: [
    '@/assets/sass/main.scss'
  ],
  router: {
    middleware: 'menu'
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['gsap'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
