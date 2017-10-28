<template>
  <header class="header" role="banner">
    <nuxt-link to="/" class="logo"><span>K-Ho</span></nuxt-link>
    <button type="button" class="hamburger" @click="$store.commit('showMenu')">
      <span class="hamburger__span hamburger__span_1"></span>
      <span class="hamburger__span hamburger__span_2"></span>
      <span class="hamburger__span hamburger__span_3"></span>
    </button>
    <transition
      :css="false"
      @enter="enter"
      @leave="leave"
    >
      <div class="menu-overlay-holder" v-show="$store.state.isShowMenu">
        <div class="menu-overlay" @click="$store.commit('hideMenu')"></div>
        <div class="menu-angle"></div>
        <div class="menu-block">
          <button type="button" class="menu-close" @click="$store.commit('hideMenu')"><svg viewBox="1361 52 31 31" width="31" height="31"><path d="M1377.84 67.5l9.962 9.972-1.33 1.33-9.97-9.96-9.974 9.96-1.33-1.33 9.96-9.972-9.96-9.972 1.33-1.33 9.972 9.96 9.972-9.96 1.33 1.33-9.96 9.97v.002z"/><path fill="none" d="M1361 52h31v31h-31z"/></svg></button>
          <nav class="menu">
            <ul class="menu-lvl-1">
              <li class="menu-lvl-1__list">
                <span class="menu-lvl-1__link">Projects</span>
                <ul class="menu-lvl-2">
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/project/nintendo" class="menu-lvl-2__link">Nintendo</nuxt-link>
                  </li>
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/project/mind" class="menu-lvl-2__link">Mind</nuxt-link>
                  </li>
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/project/cav" class="menu-lvl-2__link">Consumer Affairs Victoria</nuxt-link>
                  </li>
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/project/telstra" class="menu-lvl-2__link">Telstra</nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="menu-lvl-1__list">
                <span class="menu-lvl-1__link">Tributes</span>
                <ul class="menu-lvl-2">
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/arsenal" class="menu-lvl-2__link">Arsenal</nuxt-link>
                  </li>
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/tiktok" class="menu-lvl-2__link">TikTok</nuxt-link>
                  </li>
                  <li class="menu-lvl-2__list">
                    <nuxt-link to="/onepiece" class="menu-lvl-2__link">One Piece</nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="menu-lvl-1__list">
                <nuxt-link to="/about" class="menu-lvl-1__link">About</nuxt-link>
              </li>
              <li class="menu-lvl-1__list">
                <nuxt-link to="/contact" class="menu-lvl-1__link">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="social-holder">
            <a href="https://github.com/kevin-ho87/" target="_blank" rel="noopener" class="social-link"><svg viewBox="1296 815 40 38.75" width="40" height="38.75"><path d="M1316 815c-11 0-20 9-20 20 0 8.5 5.333 15.75 12.75 18.667.75-.167 1.417-.834 1.417-1.667v-3.667H1308c-1.583 0-2.917-.75-3.583-1.916-.167-.334-.334-.75-.5-1.167-.334-.917-.75-1.917-1.584-2.5-.333-.25-.5-.75-.416-1.167.166-.416.583-.75 1.333-.666.833.083 2.083 1 2.833 2 .667.833 1.167 1.333 2.167 1.333h.25c.75 0 2.583 0 2.917-.333.25-.334.416-.584.666-.834-5-1-7.833-3.916-7.833-8.333 0-1.5.417-3 1.333-4.333-.333-1.25-1.083-4.5.5-5.917l.25-.25h.334c2.166 0 3.75.917 4.75 1.667 2.916-1.084 6.25-1.084 9.166 0 .917-.75 2.5-1.667 4.75-1.667h.334l.25.25c1.583 1.5.833 4.667.5 5.917.833 1.333 1.333 2.833 1.333 4.333 0 4.417-2.833 7.333-7.75 8.333 1.25 1.334 1.917 3.334 1.917 4.917v4.083c0 .834.583 1.5 1.416 1.667 7.334-3 12.667-10.25 12.667-18.75 0-11-9-20-20-20z" fill="#132D5B"/></svg></a>

            <a href="https://www.behance.net/aderon" target="_blank" rel="noopener" class="social-link">
              <svg viewBox="1352 815 40 40" width="40" height="40">
                <path d="M1384 815h-24c-4.41 0-8 3.59-8 8v24c0 4.41 3.59 8 8 8h24c4.41 0 8-3.59 8-8v-24c0-4.41-3.59-8-8-8zm-6.4 12.8h6.4c.442 0 .8.358.8.8 0 .442-.358.8-.8.8h-6.4c-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8zm-5.44 12.8c-.32.56-.72 1.04-1.28 1.44-.56.32-1.12.64-1.84.8-.64.16-1.36.24-2.08.24h-7.76v-16h7.52c.72 0 1.44.08 2.08.24.64.08 1.12.32 1.6.64s.8.72 1.04 1.2.4 1.12.4 1.84c0 .8-.16 1.44-.56 2-.32.48-.88.96-1.6 1.28.96.32 1.68.8 2.16 1.52.56.72.72 1.52.8 2.72 0 .8-.16 1.52-.48 2.08zm8.8.08c2.08 0 2.56-1.68 2.56-1.68h2.8s-1.04 4-5.44 4c-1.92 0-5.84-1.04-5.84-6 0-5.36 4.4-6 5.84-6 5.2 0 5.52 4.56 5.52 7.2h-8.24c.08.72.56 2.48 2.8 2.48z" fill="#132D5B"/>
                <path d="M1363.2 829.4h2.24c2.32 0 2.56 1.36 2.56 2 0 .88-.32 2-2.32 2h-2.48v-4zm2.72 11.2h-2.72v-4.8h2.8c2.32 0 2.72 1.44 2.72 2.4s-.72 2.4-2.8 2.4zm12.4-5.52c.08-.32.24-.56.4-.8.24-.24.48-.48.8-.64.32-.16.72-.24 1.28-.24.8 0 1.36.24 1.76.64.4.4.64 1.04.72 1.84h-5.12c0-.32.08-.56.16-.8z" fill="#132D5B"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { TimelineLite, Circ } from 'gsap'

export default {
  methods: {
    enter (el, done) {
      this.tl = new TimelineLite({ onComplete: done })

      this.tl.fromTo('.menu-overlay', 0.3,
        {autoAlpha: 0},
        {autoAlpha: 1, ease: Circ.easeIn})
      this.tl.fromTo('.menu-angle', 0.5,
        {x: -480, rotation: -90, transformOrigin: '0 0'},
        {rotation: -15, ease: Circ.easeInOut}, '-=.2')
      this.tl.staggerFromTo('.menu-block > *', 0.3,
        {x: 50, autoAlpha: 0},
        {x: 0, autoAlpha: 1, ease: Circ.easeInOut},
        0.1, '-=.4')
    },
    leave (el, done) {
      this.tl.eventCallback('onReverseComplete', done)
      this.tl.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  // opacity: 0;
}

.logo,
.hamburger {
  position: absolute;
  background-color: #fff;
}

.logo {
  position: relative;
  top: 2rem;
  left: 2rem;
  color: $primary-colour;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 700;
  display: inline-block;
  padding: .3rem .5rem;
  transition: color .3s ease-in-out;
  @media screen and (max-width: 800px) {
    left: 20px;
  }

  span {
    position: relative;
  }

  &:before {
    content: '';
    background-color: $primary-colour;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: width .1s ease-in-out;
  }

  &:hover {
    color: #fff;
  }

  &:hover:before {
    width: 100%;
    transition: width .7s ease-in-out;
  }
}

.hamburger {
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  border: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 800px) {
    right: 20px;
  }

  &__span {
    display: block;
    height: 1px;
    width: 24px;
    margin: 3px 0;
    background-color: $primary-colour;
    transform-origin: 100% 0;
  }

  &:hover {
    .hamburger__span {
      animation: menu-scale 0.4s ease-in-out;

      &_2 {
        animation-delay: 0.2s;
      }

      &_3 {
        animation-delay: 0.3s;
      }

    }
  }
}

@keyframes menu-scale {
  0% {
    transform: scaleX(1.0);
  } 70% {
    transform: scaleX(0);
  } 100% {
    transform: scaleX(1.0);
  }
}

.menu-overlay-holder,
.menu-overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.menu-overlay-holder {
  position: fixed;
  z-index: 3;
  overflow: hidden;
}

.menu-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, .3);
}

.menu-angle {
  background-color: #fff;
  position: absolute;
  left: 100%;
  top: 0;
  height: 150%;
  width: 150%;
}

.menu-block {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding: 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.menu-close {
  padding: 0;
  border: 0;
  background-color: transparent;
  margin-bottom: 2rem;
  fill: $primary-colour;
  transition: background-color .3s ease-out,
              fill .3s ease-out;

  &:hover {
    background-color: $primary-colour;
    fill: #fff;
  }

  svg {
    display: block;
  }
}

.social-holder {
  margin-top: auto;
}
.social-link {
  margin-left: .5rem;
}

.menu {
  text-align: right;

  a {
    text-decoration: none;
    color: currentColor;
    display: inline-block;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $primary-colour;
      transition: width .1s ease-in-out;
    }

    &:focus:before,
    &:hover:before {
      width: 100%;
      transition: width .4s ease-in-out;
    }
  }
}

.menu-lvl-1 {
  &__list {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &__link {
    font-size: 1.3rem;
    font-weight: bold;
  }
}

.menu-lvl-2 {
  &__list {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }

  &__link {
    font-size: 1.1rem;
  }
}

</style>
