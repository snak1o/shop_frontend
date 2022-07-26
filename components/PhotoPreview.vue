<template>
  <div class="absolute p-2 top-0 left-0 w-screen h-screen bg-neutral-800 flex justify-center items-center text-indigo-300 select-none overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-7 right-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="$emit('close')">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 absolute left-2 md:left-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="$emit('prev')">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    <img :src="img"/>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 absolute right-2 md:right-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="$emit('next')">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "PhotoPreview",
  props: ['img'],
}
</script>

<style scoped>

</style>
