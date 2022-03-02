<template>
  <div class="notification">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .notification {
    border-left: 0.5em solid rgba(0,0,0,.15);
    border-radius: 5px;
    display: flex;
    padding: 16px 32px 16px 50px;
    color: white;
    position: relative;
  }
  .info {
    background: #3d9cd2;
  }
  .info:before {
    left: 17.5px;
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background: url("/info.svg");
  }
</style>
