<template>
  <div class="app"  v-if="initPage">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid mt-3">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'
import Multiselect from 'vue-multiselect'
import Vue from 'vue'
// Vue.component('person', Person)
Vue.component('multiselect', Multiselect)

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    },
    initPage () {
      return this.$auth.check()
    }
  },
  created () {
    if (!this.$auth.check()) {
      console.error('Not Logged in, redirecting')
      Vue.router.push('/pages/error/401')
    }
  }
}
</script>
