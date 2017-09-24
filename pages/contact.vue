<template>
  <div class="page-contact">
    <div class="container">
      <div>
        <h1>Hello!</h1>
        <p>Contact form page</p>
        <div class="form-box">

          <form action="" @submit.prevent="onSubmit">

            <div class="form-row">
              <label>Name</label>
              <input type="text" name="first_name" v-model="name">
              <span v-if="name === '' && isSubmitted" class="required">This field is required</span>
            </div>

            <input id="last-name" type="text" name="last_name" v-model="honeypot">

            <div class="form-row">
              <label>Email</label>
              <input type="text" name="email" v-model="email">
              <span v-if="!emailValidate && isSubmitted" class="required">Please enter a valid email address</span>
            </div>

            <div class="form-row">
              <label>Message</label>
              <textarea name="message" v-model="message"></textarea>
              <span v-if="message === '' && isSubmitted" class="required">This field is required</span>
            </div>

            <div class="form-row">
              <button type="submit" class="btn">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      honeypot: '',
      isSubmitted: false
    }
  },
  computed: {
    emailValidate () {
      let check = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

      return check.test(this.email)
    }
  },
  methods: {
    clearForm () {
      this.isSubmitted = false
      this.name = ''
      this.email = ''
      this.message = ''
    },
    onSubmit (e) {
      this.isSubmitted = true
      if (this.name !== '' && this.emailValidate && this.message !== '' && this.honeypot === '') {
        console.log('submit form')
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
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
