module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kevin Ho - Front end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am Kevin Ho, Front end developer, Arsenal supporter, One Piece fan.' },
      { property: 'og:image', content: 'http://kevin-ho.surge.sh/img/share.jpg' }
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
        description: 'Welcome to the world of Nintendo 3DS.',
        url: 'https://www.nintendo.com.au/yours-to-play/',
        logo: 'nintendo-logo.png',
        color: '#E60012',
        tech: 'Greensock, jQuery, HTML5, CSS3, Responsive web design',
        year: '2016',
        info: 'Building this awesome site gave me the opportunity to enhance the user experience with timeline based animations. Whilst working closely with the designer and project manager, I was able to deliver this fun site to the high standards set by  Nintendo.',
        gifs: ['nintendo-1.gif', 'nintendo-4.jpg', 'nintendo-2.gif', 'nintendo-3.gif', 'nintendo-5.gif'],
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
        description: 'Mind Australia Limited is one of the country\'s leading community-managed specialist mental health service providers.',
        url: 'https://www.mindaustralia.org.au/',
        logo: 'mind-logo.png',
        color: '#0AAEEF',
        tech: 'WCAG 2.0 level AA accessibility, jQuery, HTML5, CSS3, Drupal, Responsive web design',
        year: '2017',
        info: 'The biggest challenge I faced during the front end development of this project was the task of unifying responsive web design, meeting WCAG 2.0 level AA requirements, and enhancing the user experience with transitions.',
        gifs: ['mind-1.gif', 'mind-3.jpg', 'mind-2.gif', 'mind-4.gif'],
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
        description: 'A fun and interactive site educating today\'s youth on their consumer rights.',
        url: 'http://partyforyourrights.vic.gov.au/',
        logo: 'cav-logo.png',
        color: '#441C72',
        tech: 'Backbone, Greensock, jQuery, HTML5, CSS3',
        year: '2013',
        info: 'My main role within this project was the creation of the mobile web application with the use of Backbone js. This includes layout construction and programming logic. In addition, I assisted and worked closely with the designer and senior developer in the creation of the desktop site. The tasks include bug testing/fixing and usability enhancements.',
        gifs: ['cav-1.gif', 'cav-2.jpg', 'cav-3.jpg', 'cav-4.gif', 'cav-5.gif'],
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
        description: 'Designed to provide news, insights and opinions around the way you use technology to connect.',
        url: 'https://exchange.telstra.com.au/',
        logo: 'telstra-logo.png',
        color: '#A0148C',
        tech: 'Responsive web design, jQuery, HTML5, CSS3, Wordpress',
        year: '2017',
        info: 'My role within this project was to craft the responsive design layout re-skin of the Telstra blog site. In addition, I assisted the back end developer in the integration of the site re-skin. The biggest challenge I faced was the task of implementing the new elements together with the existing required elements whilst meeting the high requirements of Telstra\'s branding guidelines.',
        gifs: ['telstra-1.gif', 'telstra-2.jpg', 'telstra-3.jpg'],
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
  generate: {
    routes: [
      '/project/nintendo',
      '/project/mind',
      '/project/cav',
      '/project/telstra'
    ]
  },
  router: {
    base: '/',
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
