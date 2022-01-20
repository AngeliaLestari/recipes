// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/tailwind.css'
import VueTailwind from 'vue-tailwind'
import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'
import VueCarousel from 'vue-carousel'

const settings = {
  'angel-input': {
    component: TInput,
    props: {
      classes: 'block px-3 py-2 text-blue placeholder-pink-700 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-5/12'
      // ...More settings
    }
  },
  'angel-button': {
    component: TButton,
    props: {
      classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed'
      // ...More settings
    }
  }
}

Vue.use(VueTailwind, settings)
Vue.use(VueCarousel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
