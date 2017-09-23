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
            desktop: 'desktop-nintendo-1.jpg',
            tablet: 'tablet-nintendo-1.jpg',
            mobile: 'mobile-nintendo-1.jpg'
          }
        ]
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/sass/main.scss'
  ],

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
