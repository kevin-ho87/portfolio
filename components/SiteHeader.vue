<template>
  <header class="header" role="banner">
    <a href="#" class="logo">K-Ho</a>
    <button type="button" class="hamburger" @click="showMenu">
      <svg viewBox="1369.79 44 28.08 21.6" width="28.08" height="21.6">
        <g><path d="M1369.79 44h28.08v4.32h-28.08zM1369.79 61.28h28.08v4.32h-28.08zM1369.79 52.64h28.08v4.32h-28.08z"/></g>
      </svg>
    </button>
    <transition
      :css="false"
      @enter="enter"
      @leave="leave"
    >
      <div class="menu-overlay-holder" v-show="isShowMenu">
        <div class="menu-overlay" @click="hideMenu"></div>
        <div class="menu-angle"></div>
        <div class="menu-block">
          <button type="button" class="menu-close" @click="hideMenu"><svg viewBox="1361 52 31 31" width="31" height="31"><path d="M1377.84 67.5l9.962 9.972-1.33 1.33-9.97-9.96-9.974 9.96-1.33-1.33 9.96-9.972-9.96-9.972 1.33-1.33 9.972 9.96 9.972-9.96 1.33 1.33-9.96 9.97v.002z"/><path fill="none" d="M1361 52h31v31h-31z"/></svg></button>

          <nav class="menu">
            <li class="menu__list"><span class="menu__category">Projects</span></li>
            <li class="menu__list"><a href="" class="menu__link">Nintendo</a></li>
            <li class="menu__list"><a href="" class="menu__link">Mind</a></li>
            <li class="menu__list"><a href="" class="menu__link">Consumer Affairs Victoria</a></li>
            <li class="menu__list"><a href="" class="menu__link">Telstra</a></li>
          </nav>

          <a href="mailto:kevin_ho87@yahoo.com.au" class="email">kevin_ho87@yahoo.com.au</a>

          <div class="social-holder">
            <a href="" class="social-link"><svg viewBox="1296 815 40 38.75" width="40" height="38.75"><path d="M1316 815c-11 0-20 9-20 20 0 8.5 5.333 15.75 12.75 18.667.75-.167 1.417-.834 1.417-1.667v-3.667H1308c-1.583 0-2.917-.75-3.583-1.916-.167-.334-.334-.75-.5-1.167-.334-.917-.75-1.917-1.584-2.5-.333-.25-.5-.75-.416-1.167.166-.416.583-.75 1.333-.666.833.083 2.083 1 2.833 2 .667.833 1.167 1.333 2.167 1.333h.25c.75 0 2.583 0 2.917-.333.25-.334.416-.584.666-.834-5-1-7.833-3.916-7.833-8.333 0-1.5.417-3 1.333-4.333-.333-1.25-1.083-4.5.5-5.917l.25-.25h.334c2.166 0 3.75.917 4.75 1.667 2.916-1.084 6.25-1.084 9.166 0 .917-.75 2.5-1.667 4.75-1.667h.334l.25.25c1.583 1.5.833 4.667.5 5.917.833 1.333 1.333 2.833 1.333 4.333 0 4.417-2.833 7.333-7.75 8.333 1.25 1.334 1.917 3.334 1.917 4.917v4.083c0 .834.583 1.5 1.416 1.667 7.334-3 12.667-10.25 12.667-18.75 0-11-9-20-20-20z" fill="#132D5B"/></svg></a>
            <a href="" class="social-link">
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
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    showMenu () {
      this.isShowMenu = true
    },
    hideMenu () {
      this.isShowMenu = false
    },
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
}

.logo,
.hamburger {
  position: absolute;
  top: 2rem;
}

.logo {
  left: 2rem;
  font-weight: bold;
  color: currentColor;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 700;
}

.hamburger {
  right: 2rem;
  border: 0;
  padding: 5px;
  transition: all .3s ease-in-out;
  //background-color: transparent;
  background-color: #000;
  fill: #fff;

  &:hover {
    background-color: #fff;
    fill: $primary-colour;
  }

  svg {
    display: block;
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

.menu {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 2rem;

  &__list {
    text-align: right;
    margin-bottom: .5rem;
  }

  &__category {
    font-size: 1.3rem;
    font-weight: bold;
  }

  &__link {
    display: inline-block;
    font-size: 1.1rem;
    text-decoration: none;
    color: currentColor;
  }
}

.email {
  color: currentColor;
  text-decoration: none;
}

.social-holder {
  margin-top: auto;
}
.social-link {
  margin-left: .5rem;
}

</style>
