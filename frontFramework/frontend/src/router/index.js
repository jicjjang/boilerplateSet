import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/One'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/m',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/m/one',
      name: 'say one!',
      component: One
    }
  ]
})
