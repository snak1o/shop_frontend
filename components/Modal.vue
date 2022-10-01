<template>
  <div class="absolute w-screen h-screen bg-red-500" v-if="show">

  </div>
</template>

<script>
export default {
  props: ['show'],
  name: "Modal"
}
</script>

<style scoped>

</style>
