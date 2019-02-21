<template>
  <div id="login">
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="name" v-model="auth.userName">
          <input type="password" placeholder="password" v-model="auth.passWord">
          <input type="text" placeholder="email address">
          <button>create</button>
          <p class="message">
            Already registered?
            <a href="#">Sign In</a>
          </p>
        </form>
        <form class="login-form" @submit="login">
          <input type="text" placeholder="username" v-model="auth.userName">
          <input type="password" placeholder="password" v-model="auth.passWord">
          <button type="submit" :disabled="isSubmited">login</button>
          <p class="message">
            Not registered?
            <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      isSubmited: false,
      auth: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      const url = process.env.VUE_APP_API_URL
      console.log(url)
      if (this.auth.userName && this.auth.passWord) {
        this.isSubmited = true
        axios
          .post(`${url}/login`, {
            username: this.auth.userName,
            password: this.auth.passWord
          })
          .then(respone => {
            if(respone.data) {
              localStorage.setItem('token', respone.data.token)
              this.isSubmited = false
              this.$router.push('/')
            }
            else {
              this.isSubmited = false;
            }
          })
          .catch(error => {
            console.log(error)
            this.isSubmited = false
          })
      }
    }
  }
}
</script>
