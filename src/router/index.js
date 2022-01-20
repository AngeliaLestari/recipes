import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import recipes from '@/components/recipes'
import grid from '@/components/grid'
import card from '@/components/library/card'
import about from '@/components/About'

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
    },
    {
      path: '/grid',
      name: '/grid',
      component: grid
    },
    {
      path: '/about',
      name: '/about',
      component: about
    }
  ]
})
