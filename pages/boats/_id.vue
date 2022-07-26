<template>
  <section class="text-gray-600 body-font" :class="preview ? 'overflow-hidden' : ''">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full h-auto select-none space-y-5">
          <img alt="ecommerce" class="object-cover object-center cursor-pointer rounded" :src="activeImg" @click="preview = true" >
          <div class="inline-grid grid-cols-5 gap-5 items-center">
            <div v-for="img in item.photos" :key="img" class="h-24 cursor-pointer flex justify-center" @click="activeImg = img">
              <img class=" object-cover object-center rounded" :src="img" :alt="item.name" />
            </div>

          </div>
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{item.categoryId}}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">{{item.name}}</h1>
          <p class="leading-relaxed min-h-max">{{item.description}}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Color</span>
              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
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
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{item.pricealv.toFixed(2)}}€</span>
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
  // mounted() {
  //   this.getProduct()
  // },
  data() {
    return {
      item: {
        "id": 1,
        "name": "Buster S 2022 boat cover",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consequatur ex magni nemo non nostrum officiis perferendis perspiciatis praesentium quae quis, quisquam, ratione rerum sint sit veritatis voluptatem? Aut?",
        "categoryId": 'Buster',
        "tags": [
          {
            "name": "tag1"
          },
          {
            "name": "tag2"
          }
        ],
        "photos": ["https://i.yapx.ru/S9F4K.png",
          "https://i.yapx.ru/TEZZ1.jpg",
          "https://i.yapx.ru/TEZZ3.jpg",
          "https://i.yapx.ru/TEZZ9.jpg",
          "https://i.yapx.ru/TEZaA.jpg"
        ],
        "colors": [
          {
            "name": "Dark Gray",
            "hex": "#4a4848",
            "id": 1
          },
          {
            "name": "Red",
            "hex": "#ff0000",
            "id": 3
          }
        ],
        "price": 32.26,
        "pricealv": 40,
        "sku": "F23"
      },
      quantity: 1,
      currentColor: "",
      activeImg: '',
      preview: false,
    }
  },
  mounted() {
    this.activeImg = this.item.photos[0]
  },
  methods: {
    addToCart() {
      let quantity = this.quantity
      let item = this.item
      this.$store.commit('addItemToCart', { ...item, quantity })
    },
    getIndex() {
      let index = 0
      for (let i in this.item.photos) {
        if (this.item.photos[i] === this.activeImg) {
          index = i
        }
      }
      return index
    },
    nextImage() {
      let i = this.getIndex()
      if (i < (this.item.photos.length - 1)) {
        i ++
        console.log("next",i)
        this.activeImg = this.item.photos[i]
      }
    },
    prevImage() {
      let i = this.getIndex()
      if (i > 0) {
        i--
        console.log("prev",i)
        this.activeImg = this.item.photos[i]
      }
    }
  },
}
</script>

<style scoped>
</style>
