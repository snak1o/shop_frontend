<template>
  <div class="container">
    <h1 class="title">Forgot your password?</h1>
    <p class="forgot-text">Can't access your account? Enter your username or email address. A link will be emailed to you to set a new password.</p>
    <div class="forgot-container">
      <span class="input">
        <label for="email">Username or email address</label>
        <input type="email" id="email">
        <button class="btn btn-sm">Restore password</button>
      </span>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 100px;
  }
  .forgot-text {
    line-height: 1rem;
    margin-bottom: 30px;
  }
  .forgot-container {
    display: grid;
    grid-template-columns: calc(50% - 25px) calc(50% - 25px);
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 3px;
  }
  label:after {
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
</style>
