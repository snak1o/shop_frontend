<template>
  <section class="container mx-auto p-5 flex flex-col">
    <h1 class="text-3xl mb-5">
      Authorization
    </h1>
    <div class="flex w-full flex-col lg:flex-row h-full space-y-5 lg:space-y-0 lg:space-x-5">
      <div class="flex flex-col w-full lg:w-6/12 justify-center space-y-3">
        <h2 class="text-xl text-center">Login</h2>
        <div class="flex flex-col space-y-1">
          <label for="login" class="text-gray-600">Login or email</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="login" id="login" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password" class="text-gray-600">Password</label>
          <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="password" id="password" />
        </div>
        <div class="flex justify-center">
          <button class="md:w-1/3 w-2/3 rounded-md bg-indigo-500 hover:bg-indigo-600 p-3 text-white mt-2" @click="signIn(login, password)">Log in</button>
        </div>
      </div>

      <div class="flex flex-row space-x-5 lg:space-x-0 lg:flex-col h-full items-center select-none">
        <div class="lg:w-0.5 h-0.5 w-3/6 lg:w-full bg-gray-100 rounded-full lg:h-3/6"></div>
        <span class="text-gray-400">or</span>
        <div class="lg:w-0.5 h-0.5 w-3/6 lg:w-full bg-gray-100 rounded-full lg:h-3/6"></div>
      </div>

      <div class="flex flex-col w-full lg:w-6/12 justify-center space-y-3">
        <h2 class="text-xl text-center">Registration</h2>
        <div class="flex flex-col space-y-1">
          <label for="rEmail" class="text-gray-600">Email</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="rEmail" id="rEmail" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="rLogin" class="text-gray-600">Login</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="rLogin" id="rLogin" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="rPassword" class="text-gray-600">Password</label>
          <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="rPassword" id="rPassword" />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="rPasswordRetype" class="text-gray-600">Retype password</label>
          <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="rPasswordRetype" id="rPasswordRetype" />
        </div>
        <div class="flex justify-center">
          <button class="md:w-1/3 w-2/3 rounded-md bg-indigo-500 hover:bg-indigo-600 p-3 text-white mt-2" @click="signUp">Create account</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Auth",
  middleware: 'auth',
  data() {
    return {
      login: "",
      password: "",
      rLogin: "",
      rEmail: "",
      rPassword: "",
      rPasswordRetype: "",
    }
  },
  methods: {
    async signUp() {
     if (this.registerValidation()) {
       try {
         const res = await this.$axios.post('/users/sign-up', {
           email: this.rEmail,
           login: this.rLogin,
           password: this.rPassword
         })
         if (res.status === 201) {
           await this.signIn(this.rLogin, this.rPassword)
         }
       }catch (e) {
         console.log(e)
       }
     }
    },
    async signIn(login, password) {
      if (this.loginValidation()) {
        try {
          const res = await this.$auth.loginWith('local', {
            data: {
              login: login,
              password: password
            }
          })
          if (res.status && res.status === 200) {
            try {
              const user = await this.$axios.$get('/users/me')
              this.$auth.setUser(user)
            } catch (e) {
              if (e.response.status === 403) {
                await this.$router.push('/confirm')
              }
            }
          }
        } catch(e) {
          if (e.response.status === 404) {
            console.log('User not found.')
          }
        }
      }
    },
    loginValidation() {
      if (this.login.trim().length < 1) {
        console.log('login error')
        return false
      }
      if (this.password.trim().length < 1) {
        console.log('password error')
        return false
      }
      else {
        return true
      }
    },
    registerValidation() {
      if (this.rLogin.trim().length < 1) {
        console.log('rlogin error')
        return false
      }
      if (this.rEmail.trim().length < 1) {
        console.log('remail error')
        return false
      }
      if (this.rPassword.trim().length < 1) {
        console.log('rpassword error')
        return false
      }
      if (this.rPassword.trim() !== this.rPasswordRetype.trim()) {
        console.log('rpassword confirm error')
        return false
      }
      else {
        return true
      }
    }
  },

}
</script>

<style scoped>

</style>
