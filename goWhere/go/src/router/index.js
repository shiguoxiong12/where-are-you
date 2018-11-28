import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/home.vue'
import city from '@/view/city/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
