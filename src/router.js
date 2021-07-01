import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Clients from './components/Clients'
import Defaulters from './components/Defaulters'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/defaulters',
      name: 'Defaulters',
      component: Defaulters
    }
  ]
})

export default router