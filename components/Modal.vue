<template>
  <div class="absolute w-screen h-screen bg-[#00000080] left-0 top-0 z-1000 overflow-hidden flex justify-center items-center px-10 md:px-0" @click="$emit('close')">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style scoped>

</style>
