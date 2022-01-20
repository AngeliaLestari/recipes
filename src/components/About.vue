<template>
  <div class="font-body bg-gradient-to-br from-plaster to-dessert ">
    <div class="grid grid-cols-6 grid-rows-4">
      <div class="text-gray-700 font-bold mb-2">
        <router-link
          to="/"
          class="px-4 flex justify-end border-r-4 border-primary"
        >
          <span class="hidden md:block">Home</span>
          <img
            class="ml-2"
            src="@/assets/home.svg"
            width="20px"
            height="20px"
          />
        </router-link>
      </div>
      <Carousel
        class="col-span-6 row-start-2 lg:col-span-4 lg:col-start-2 bg-gradient-to-br from-gray-500 to-gray-100 rounded-lg"
        :per-page="1"
        :mouse-drag="false"
      >
        <Slide
          class="text-white p-10 md:text-xl lg:text-2xl"
          v-for="slide in aboutSlide"
          :key="slide.id"
        >
          <h1 class="text-center font-extrabold text-blue-900 uppercase">
            {{ slide.about }}
          </h1>
          <p class="text-center block">{{ slide.tagline }}</p>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      aboutSlide: [
        {
          id: 1,
          about: 'vision',
          tagline: 'Provides the best recipes for all to enjoy'
        },
        {
          id: 2,
          about: 'mission',
          tagline:
            'We wake up every day to inspire people to discover their food values, and to live happier, healthier lives'
        },
        {
          id: 3,
          about: 'tagline',
          tagline: 'Happy tummy, happy soul'
        }
      ]
    }
  }
}
</script>
