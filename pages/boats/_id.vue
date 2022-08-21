<template>
  <section class="text-gray-600 body-font" :class="preview ? 'overflow-hidden' : ''">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full h-auto select-none space-y-5 flex flex-col items-center">
          <img alt="ecommerce" class="object-cover object-center cursor-pointer rounded" :src="activeImg" @click="preview = true" >
          <div class="inline-grid grid-cols-5 gap-5 items-center">
            <div v-for="img in item.images" :key="img.id" class="h-24 cursor-pointer flex justify-center" @click="activeImg = getHost + img.filename">
              <img class=" object-cover object-center rounded" :src="getHost + img.filename" :alt="item.name" />
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{cat}}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">{{item.name}}</h1>
          <p class="leading-relaxed min-h-max">{{item.description}}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex space-x-2">
              <span>Color</span>
              <button v-for="color in item.colors" class="border-2 rounded-full w-6 h-6 focus:outline-none" :class="selectedColor.id === color.id ? 'border-indigo-300 ' : 'border-gray-200'" :style="'background-color: ' + color.hex" :key="color.id" @click="selectedColor = color"></button>
            </div>
            <!--            <div class="flex ml-6 items-center">
                          <span class="mr-3">Size</span>
                          <div class="relative">
                            <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                              <option>SM</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                            </select>
                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                          </div>
                        </div>-->
          </div>
          <span>
              Reference: {{item.sku}}
            </span>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{item.price}}€</span>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click="addToCart">Add to cart</button>
          </div>
        </div>
      </div>
      <PhotoPreview v-if="preview" :img="activeImg" @close="preview = false" @next="nextImage" @prev="prevImage"/>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      item: {},
      quantity: 1,
      currentColor: "",
      activeImg: '',
      preview: false,
      selectedColor: "",
      cat: ''
    }
  },
  async mounted() {
    this.item  = await this.$axios.$get('/items/' + this.$route.params.id)
    console.log(this.item)
    this.activeImg = this.getHost + this.item.images[0].filename
    this.cat = this.item.category.name
  },
  computed: {
    getHost() {
      return this.$axios.defaults.baseURL.replace('/api/v1', '')
    }
  },
  methods: {
    addToCart() {
      let quantity = this.quantity
      let selectedColor = this.selectedColor
      let item = this.item
      if (selectedColor === "") {
        console.log('no color selected')
      }
      else {
        this.$store.commit('addQuantity', { ...item, quantity, selectedColor})
      }
    },
    getIndex() {
      let index = 0
      for (let i in this.item.images) {
        if (this.getHost + this.item.images[i].filename === this.activeImg) {
          index = i
        }
      }
      return index
    },
    nextImage() {
      let i = this.getIndex()
      if (i < (this.item.images.length - 1)) {
        i ++
        this.activeImg = this.getHost + this.item.images[i].filename
      }
    },
    prevImage() {
      let i = this.getIndex()
      if (i > 0) {
        i--
        this.activeImg = this.getHost + this.item.images[i].filename
      }
    }
  },
}
</script>

<style scoped>
</style>
