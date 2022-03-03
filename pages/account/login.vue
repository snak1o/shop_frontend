<template>
  <div class="container">
      <h1 class="title">Account</h1>
    <div class="login-container">
      <div class="login-form">
        <h2>Login</h2>
        <div class="login-form-container">
          <label class="login-form-label" for="username">Username or email address</label>
          <input type="text" id="username">
        </div>
        <div class="login-form-container">
          <label class="login-form-label" for="password">Password</label>
          <span class="show-password" @click.prevent="hidePasswordLogin = !hidePasswordLogin" :style="hidePasswordLogin ? {background: 'url(/eye.svg) no-repeat center'} : {background: 'url(/eye-disabled.svg) no-repeat center'}"></span>
          <input :type="hidePasswordLogin ? 'password' : 'text'" id="password">
        </div>
        <button class="btn btn-sm mb">Login</button>
        <router-link to="/account/forgot">Forgot your password?</router-link>
      </div>
      <div class="login-form">
        <h2>Register</h2>
        <div class="login-form-container">
          <div class="login-form-items">
            <label class="login-form-label" for="register-email">Email address</label>
            <input type="text" id="register-email">
          </div>
          <div class="login-form-items">
            <span class="show-password" @click.prevent="hidePasswordResister = !hidePasswordResister" :style="hidePasswordResister ? {background: 'url(/eye.svg) no-repeat center'} : {background: 'url(/eye-disabled.svg) no-repeat center'}"></span>
            <label class="login-form-label" for="register-password">Password</label>
            <input :type="hidePasswordResister ? 'password' : 'text'" id="register-password">
          </div>
          <div class="login-form-items">
            <span class="show-password" @click.prevent="hidePasswordResister = !hidePasswordResister" :style="hidePasswordResister ? {background: 'url(/eye.svg) no-repeat center'} : {background: 'url(/eye-disabled.svg) no-repeat center'}"></span>
            <label class="login-form-label" for="register-password-retype">Retype password</label>
            <input :type="hidePasswordResister ? 'password' : 'text'" id="register-password-retype">
          </div>
        </div>
        <p class="register-password-policy">Your personal information will be used to enhance your experience on the Website, to manage your use of your account and for other purposes described on our <router-link to="/policy">Privacy Policy</router-link>.</p>
        <button class="btn btn-sm">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import Policy from "@/pages/policy";
export default {
  components: {Policy},
  data() {
    return {
      hidePasswordLogin: true,
      hidePasswordResister: true,
    }
  },
}
</script>

<style scoped>
  .title {
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: center;
  }
  h2 {
    text-align: left;
  }
  .login-container {
    display: grid;
    grid-template-columns: calc(50% - 25px) calc(50% - 25px);
    grid-column-gap: 50px;
  }
  .login-form-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .login-form-label {
    color: black;
    font-weight: 400;
    margin-bottom: 3px;
  }
  .login-form-label:after {
    content: " *";
    color: red;
  }
  input {
    background-color: rgb(242, 242, 242);
    font-size: 16px;
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 1px 1px 0px inset;
    margin-bottom: 20px;
  }
  a {
    font-weight: 600;
    text-decoration: underline;
  }
  .register-password-policy {
    margin-bottom: 20px;
  }
  .mb {
    margin-bottom: 20px;
  }
  .show-password {
    position: absolute;
    background-size: contain;
    height: 20px;
    width: 20px;
    top: 52%;
    right: 10px;
    transform: translateY(-48%);
    cursor: pointer;
  }
  .login-form-items {
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
