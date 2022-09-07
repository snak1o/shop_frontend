<template>
  <div class="relative" >
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden hover:opacity-75 lg:h-80 lg:aspect-none cursor-pointer" @click.prevent="$router.push('/boats/' + product.id)">
      <img :src="getHost + product.images[0].filename" :alt="product.name" class="w-full h-full object-center object-cover lg:w-full lg:h-full" v-if="product.images" />
    </div>
    <div class="mt-4 flex justify-between items-end">
      <div>
        <span class="text-sm text-gray-500 tracking-widest">{{product.category.name}}</span>
        <h3 class="text-md font-semibold text-gray-700">
          <router-link :to="'/boats/' + product.id">
            {{ product.name }}
          </router-link>
        </h3>
      </div>
      <div class="flex flex-col">
        <p class="text-lg font-medium text-gray-900">{{ product.price }}€</p>
      </div>
    </div>
    <router-link :to="'/boats/' + product.id" class="text-center text-white block mt-4 p-2 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold">More information</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  computed: {
    getHost() {
      return this.$axios.defaults.baseURL.replace('/api/v1', '')
    }
  },
}
</script>

<style scoped>

</style>
