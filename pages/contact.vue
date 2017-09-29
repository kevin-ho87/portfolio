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
                <input type="text" name="first_name" v-model="name">
                <span v-if="name === '' && isSubmitted" class="required">This field is required</span>
              </div>
              <div class="form-row">
                <label>Email</label>
                <input type="text" name="email" v-model="email">
                <span v-if="!emailValidate && isSubmitted" class="required">Please enter a valid email address</span>
              </div>
              <input id="last-name" type="text" name="last_name" v-model="honeypot">

              <div class="form-row">
                <label>Message</label>
                <textarea name="message" v-model="message"></textarea>
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
import { TweenMax, Circ } from 'gsap'
import axios from 'axios'

export default {
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
    TweenMax.set('.form-success, .form-box', { transformPerspective: 800 })
    TweenMax.set('.form-success', { autoAlpha: 1, rotationY: -180 })
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
          TweenMax.to('.form-box', 0.7, {
            rotationY: 180,
            ease: Circ.easeIn
          })
          TweenMax.to('.form-success', 0.7, {
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
</style>
