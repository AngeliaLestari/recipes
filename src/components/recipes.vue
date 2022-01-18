<template>
  <div class="text-gray-600 font-body">
    <div class="grid md:grid-cols-3">
      <!--content wrapper-->
      <div class="md:col-span-1 md:flex md:justify-end">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-200">
              <a href="/">Yummy Food</a>
            </h1>
            <div class="px-4 cursor-pointer md:hidden">
              <img
                src="@/assets/menu.svg"
                width="20px"
                height="40px"
                @click="show('menu')"
              />
            </div>
          </div>
          <ul class="text-sm mt-6 hidden md:block" id="menu">
            <li class="text-gray-700 font-bold mb-2">
              <a
                href="#"
                class="px-4 flex justify-end border-r-4 border-primary"
              >
                <span>Home</span>
                <img
                  class="ml-2"
                  src="@/assets/home.svg"
                  width="20px"
                  height="20px"
                />
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>About</span>
                <img
                  class="ml-2"
                  src="@/assets/about.svg"
                  width="20px"
                  height="20px"
                />
              </a>
            </li>
            <li>
              <a href="#" class="px-4 flex justify-end border-r-4 border-white">
                <span>Contact</span>
                <img
                  class="ml-2"
                  src="@/assets/mail.svg"
                  width="20px"
                  height="20px"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!--end nav-->
      <main class="px-16 py-6 bg-gray-100 md:col-span-2">
        <div class="flex justify-center md:justify-end">
          <a
            href="#"
            class="btn text-primary border-primary hover:bg-primary hover:text-white md:border-2 transition ease-out duration-500"
            >Log in</a
          >
          <a
            href="#"
            class="btn text-primary ml-2 border-primary hover:bg-primary hover:text-white md:border-2 transition ease-out duration-500"
            >Sign up</a
          >
        </div>
        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">Yummy Food</h3>
        </header>
        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            <!-- card here -->
            <card v-for='recipe in listOfRecipes'
            :key='recipe.mainTitle'
            :mainTitle='recipe.mainTitle'
            :description='recipe.description'
            :cardPicture='recipe.cardPicture'
            :cardBadge='recipe.cardBadge'
            :badgeTitle='recipe.badgeTitle'></card>
          </div>
          <h4 class="font-bold mt-12 pb-2">Most Popular</h4>
          <div class="mt-8"><!-- cards--></div>
        </div>
        <div class="flex justify-center">
          <div
            class="transform btn text-green-900 border-green-900 border-1 md:border-2 hover:text-opacity-40 hover:border-opacity-50 hover:scale-125 shadow-inner"
          >
            Load More
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
// component
import card from '@/components/library/card.vue'
// plugins
import { show } from '@/plugins/navbar.js'

export default {
  components: {
    card
  },
  data () {
    return {
      listOfRecipes: [{
        mainTitle: '5 Bean Chili Stew',
        description: 'recipe by Angelia',
        cardPicture: 'stew.jpg',
        cardBadge: 'clock.svg',
        badgeTitle: '24Mins'
      },
      {
        mainTitle: 'Indian Curry',
        description: 'recipe by Angelia',
        cardPicture: 'curry.jpg',
        cardBadge: 'clock.svg',
        badgeTitle: '30Mins'
      },
      {
        mainTitle: 'Chinese Noddle',
        description: 'recipe by Angelia',
        cardPicture: 'noodles.jpg',
        cardBadge: 'clock.svg',
        badgeTitle: '23Mins'
      }]
    }
  },
  methods: {
    show
  }
}
</script>
<style></style>
