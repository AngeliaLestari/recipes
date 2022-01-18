import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import recipes from '@/components/recipes'
import card from '@/components/library/card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '/recipes',
      component: recipes
    },
    {
      path: '/card',
      name: '/card',
      component: card
    }
  ]
})
