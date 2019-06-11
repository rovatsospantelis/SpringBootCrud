// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueEvents from 'vue-events'
import messages from './messages/messages'

Vue.prototype.$apiURL = 'http://127.0.0.1:8080/api/'

Vue.prototype.$http = axios.create({
  baseURL: Vue.prototype.$apiURL,
  headers: {
    post: {'Content-Type': 'application/json'},
    put: {'Content-Type': 'application/json'},
    patch: {'Content-Type': 'application/json'}
  }
})

Vue.config.productionTip = false
Vue.use(Element, {locale})
Vue.use(VueEvents)
Vue.prototype.$messages = messages

// inject helper functions
Vue.mixin({
  data: function () {
    return {
      rowsPerPage: 10,
      rowsPerPageOptions: [5, 10, 20, 50],
      globalDateFormat: 'dd/MM/yyyy',
      globalDateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
      isLoading: false
    }
  },
  methods: {
    customFetch (apiUrl, httpOptions) {
      httpOptions.params.page = httpOptions.params.page - 1 // change the current page index (index must start from 0)
      return this.$http.get(apiUrl, httpOptions)
    },
    successFloat (message) {
      this.$message.success({message: message, showClose: true, duration: 6000})
    },
    errorFloat (message) {
      this.$message.error({message: message, showClose: true, duration: 6000})
    },
    showDefaultError (e) {
      console.log(e)
      this.errorFloat(this.$message.errorAction)
    },
    handleError (e) {
      this.showDefaultError(e)
    },
    getPersons () {
      return this.$http.get('persons?size=1000')
    },
    getSuppliers () {
      return this.$http.get('suppliers?size=1000')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
