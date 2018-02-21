import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/container/index'
import One from '@/components/container/One'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/m',
      name: 'Index',
      component: Index
    },
    {
      path: '/m/one',
      name: 'say one!',
      component: One
    }
  ]
})
