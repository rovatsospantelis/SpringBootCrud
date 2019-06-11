import Vue from 'vue'
import Router from 'vue-router'

// Containers
// import Full from '@/containers/Full'
import Dashboard from '@/containers/Dashboard'
import HelloWorld from '@/components/HelloWorld'
import Persons from '@/components/Persons'
import Suppliers from '@/components/Suppliers'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'persons',
          name: 'Persons',
          component: Persons
        },
        {
          path: 'suppliers',
          name: 'Suppliers',
          component: Suppliers
        }
      ]
    }
  ]
})
