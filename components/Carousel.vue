<template>
  <div id="slider" class="mx-auto overflow-hidden rounded-md relative w-full h-56 lg:w-[768px] select-none custom" @mouseover="play = false" @mouseleave="play = true">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div :key="slides[current].id" class="absolute flex w-full h-full">
        <img class="object-fill h-full w-full" :src="slides[current].image">
        <router-link :to="'/boats/' + current.id" class="absolute right-5 bottom-5 py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">Read more</router-link>
      </div>
    </transition-group>
    <div class="absolute center cursor-pointer p-1 bg-[#00000032] rounded-full left-2" @click="slidePrev">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
    <div class="absolute center cursor-pointer p-1 bg-[#00000032] rounded-full right-2" @click="slideNext">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <div class="flex space-x-5 absolute bottom-1 sm:bottom-3 h-center">
      <div v-for="(dot, index) in slides" :key="dot + index" class="h-3 w-3 rounded-full cursor-pointer" :class="index === current ? 'bg-indigo-300' : 'bg-white'" @click="moveTo(index)"></div>
    </div>

  </div>
</template>


<script>
// <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
//   &#10094;
// </div>
// <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
//   &#10095
// </div>
export default {

  name: "Carousel",
  data() {
    return {
      play: true,
      current: 0,
      transitionName: "fade",
      duration: 5000,
      slides: [
        { image: "https://img2.akspic.ru/crops/9/2/1/6/6/166129/166129-california_streaming_apple_event_wallpaper_without_logo-1920x1080.jpg", id: 1},
        { image: "https://images.wallpaperscraft.ru/image/single/ulitsa_osveshchenie_podsvetka_134856_1920x1080.jpg", id: 2},
        { image: "https://i02.appmifile.com/images/2017/04/15/db874b01-7402-4899-afba-e7a29c8b6c0e.jpg", id: 3}
      ]
    }
  },
  mounted() {
    this.autoPlay()
  },
  methods: {
    slideNext() {
      this.transitionName = "slide-next"
      if (this.current < (this.slides.length - 1)) {
        this.current++
      }
      else {
        this.current = 0
      }
    },
    slidePrev() {
      this.transitionName = "slide-prev"
      if (this.current > 0 ) {
        this.current--
      }
      else {
        this.current = this.slides.length - 1
      }
    },
    moveTo(index){
      if (index > this.current) {
        this.transitionName = "slide-next"
      }
      else {
        this.transitionName = "slide-prev"
      }
      this.current = index
    },
    autoPlay() {
      setInterval(() => {
        if (this.play) {
          this.slideNext()
        }

      }, this.duration)
    }
  },
}
</script>

<style scoped>
/* FADE IN */
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.2s ease-out;
}
.slide-next-enter {
  transform: translateX(100%);
}
.slide-next-leave-to {
  transform: translateX(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.2s ease-out;
}
.slide-prev-enter {

  transform: translateX(-100%);
}
.slide-prev-leave-to {
  transform: translateX(100%);
}

.center {
  top: 50%;
  transform: translateY(-50%);
}
.h-center {
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 475px) {
  .custom {
    height: 20rem;
  }
}
@media (min-width: 768px) {
  .custom {
    height: 432px;
  }
}
</style>
