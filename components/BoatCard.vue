<template>
  <div class="card">
    <div class="card-container" :style="{background: 'url('+ url +') center no-repeat', backgroundSize: 'contain'}"></div>
    <span class="card-name">{{name}}</span>
  </div>

</template>

<script>
export default {
  props: ["url", "name"],
  data() {
    return {
      hovered: false
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  box-shadow: 0 0 10px lightgrey;
  border-radius: 5px;
}
.card-container {
  width: 200px;
  height: 200px;

  transition: 0.3s ease;
  background-size: contain;
}
.card:hover > .card-container {
  filter: blur(5px);
}
.card-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  display: none;
}
.card:hover > .card-name {
  display: inline;
}
</style>
