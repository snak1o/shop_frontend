<template>
  <div class="flex items-center p-4 text-white border-l-8 rounded-md border-[rgba(0,0,0,.15)] relative">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <slot/>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute right-3 cursor-pointer" fill="none" viewBox="0 0 24 24" v-if="allowClose" stroke="currentColor" stroke-width="2" @click="$emit('close')">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['allowClose']
}
</script>

