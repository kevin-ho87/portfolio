<template>
  <div class="page-contact">
    <div class="angle"></div>
    <div class="container page-contact__container">
      <div class="page-contact__col page-contact__col-text">
        <div class="text-holder">
          <h1 class="title-contact">Hello!</h1>
          <p class="desc-contact">Say hello! Would love to hear from you.</p>
        </div>
      </div>
      <div class="page-contact__col page-contact__col-form">
        <div class="form-box-holder">
          <div class="form-box">
            <form action="" @submit.prevent="onSubmit">
              <div class="form-row">
                <label>Name</label>
                <input type="text" name="first_name" :disabled="isDisabled" v-model="name">
                <span v-if="name === '' && isSubmitted" class="required">This field is required</span>
              </div>
              <div class="form-row">
                <label>Email</label>
                <input type="text" name="email" :disabled="isDisabled" v-model="email">
                <span v-if="!emailValidate && isSubmitted" class="required">Please enter a valid email address</span>
              </div>
              <input id="last-name" type="text" name="last_name" v-model="honeypot">

              <div class="form-row">
                <label>Message</label>
                <textarea name="message" :disabled="isDisabled" v-model="message"></textarea>
                <span v-if="message === '' && isSubmitted" class="required">This field is required</span>
              </div>

              <div class="form-row">
                <button type="submit" :disabled="isDisabled" class="btn btn-submit">Submit</button>
                <span class="status-sending" v-if="isDisabled"><img src="~/assets/img/ajax-loader.gif" alt=""> Sending</span>
              </div>

            </form>
          </div>
          <div class="form-success">
            <svg width="150" height="150" viewBox="0 0 100 125"><path fill="#4BB543" d="M49.5 89.5c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm18.1-53.1c-1.2-1.2-3.1-1.2-4.3 0L44.2 56l-8.5-8.8c-1.2-1.2-3.1-1.2-4.3 0-1.2 1.2-1.2 3.2 0 4.4l10.7 11c1.2 1.2 3.1 1.2 4.3 0l21.3-21.8c1.1-1.2 1.1-3.2-.1-4.4z"/></svg>
            <h3 class="form-success__title">Thank you!</h3>
            <p class="form-success__desc">I will get back to you shortly</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, TweenLite, Circ, Back } from 'gsap'
import axios from 'axios'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      if (window.innerWidth <= 800) {
        done()
        return
      }
      let tl = new TimelineMax({ onComplete: done })

      TweenLite.set('.text-holder', { transformPerspective: 600 })

      tl.from(el, 0.7, { autoAlpha: 0, ease: Circ.easeOut })

      tl.add('movementStamp')

      tl.from('.text-holder', 0.7, {
        x: 100,
        autoAlpha: 0,
        rotationY: 40,
        ease: Circ.easeOut
      }, 'movementStamp')

      tl.from('.angle', 0.7, { rotation: 90, ease: Circ.easeInOut }, 'movementStamp')

      tl.from('.form-box-holder', 0.7, {
        autoAlpha: 0,
        scale: 0.9,
        y: -50,
        ease: Circ.easeOut
      }, '-=.1')

      tl.fromTo('.header', 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Circ.easeOut })
    },
    leave (el, done) {
      if (window.innerWidth <= 800) {
        done()
        return
      }
      let tl = new TimelineMax({ onComplete: done })

      tl.fromTo('.header', 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: Circ.easeOut })

      tl.staggerTo('.text-holder, .form-box-holder', 0.7, { y: -100, autoAlpha: 0, ease: Back.easeIn }, 0.1)

      tl.to(el, 0.7, { autoAlpha: 0, ease: Circ.easeOut }, '-=0.1')
    }
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      honeypot: '',
      isDisabled: false,
      isSubmitted: false
    }
  },
  computed: {
    emailValidate () {
      let check = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

      return check.test(this.email)
    }
  },
  mounted () {
    // Form flip settings
    TweenLite.set('.form-success, .form-box', { transformPerspective: 800 })
    TweenLite.set('.form-success', { autoAlpha: 1, rotationY: -180 })
  },
  methods: {
    clearForm () {
      this.isSubmitted = false
      this.name = ''
      this.email = ''
      this.message = ''
      this.isDisabled = false
    },
    onSubmit (e) {
      this.isSubmitted = true
      if (this.name !== '' && this.emailValidate && this.message !== '' && this.honeypot === '') {
        console.log('submit form')
        this.isDisabled = true
        // Submit ajax form
        // disable button, clear form
        // Success - animate thank you state
        // Error - error message, icon
        axios.post('https://formspree.io/kevin_ho87@yahoo.com.au', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then(response => {
          this.clearForm()
          TweenLite.to('.form-box', 0.7, {
            rotationY: 180,
            ease: Circ.easeIn
          })
          TweenLite.to('.form-success', 0.7, {
            rotationY: 0,
            ease: Circ.easeIn
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

.angle {
  position: absolute;
  bottom: 0;
  left: 60%;
  width: 100%;
  height: 150%;
  z-index: 1;
  background-color: $primary-colour;
  transform-origin: 0 100%;
  transform: rotate(45deg);
}

.status-sending {
  display: inline-block;
  margin-left: 10px;
}

// Form
.page-contact {
  position: relative;
  overflow: hidden;
  height: 100vh;
  background-color: #eee;

  @media screen and (min-width: 801px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (max-width: 520px) {
    height: auto;
  }

  &__container {
    height: 100%;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  &__col {
    flex: 0 0 50%;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 800px) {
    &__col-text {
      text-align: center;
    }
  }

  &__col-form {
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.text-holder {
  width: 100%;
}

.title-contact {
  margin-top: 6rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 521px) {
    font-size: 6rem;
  }
}
@media screen and (min-width: 521px) {
  .desc-contact {
    font-size: 1.5rem;
  }
}

.form-box-holder {
  width: 100%;
  position: relative;
}

.form-success {
  opacity: 0;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem 1.5rem 1.5rem;
  backface-visibility: hidden;
  text-align: center;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,
    rgba(0,0,0,0.09804) 0px 1px 2px 0px;

  &__title {
    font-size: 2.2rem;
    margin-top: 0;
    margin-bottom: .5rem;
  }

  &__desc {
    margin-top: .5rem;
    font-size: 1.4rem;
  }
}

.form-box {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  backface-visibility: hidden;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,
    rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

.form-row {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: .5rem;
}

[type=text],
[type=email],
textarea {
  padding: 1rem;
  font-family: inherit;
  border: 1px solid $primary-colour;
  width: 100%;
}

textarea {
  resize: vertical;
  height: 150px;
}

.required {
  color: red;
  font-size: .9rem;
  margin-top: 5px;
}

#last-name {
  display: none;
}

.btn-submit:disabled,
.btn-submit[disabled] {
  cursor: not-allowed;
  border-color: #eee;
  background-color: #eee;

  &:hover {
    color: $primary-colour;
    border-color: #eee;
    background-color: #eee;
  }
}

</style>
