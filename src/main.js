// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'typeface-roboto'
import moment from 'moment'
import App from './App'
import MuseUI from 'muse-ui'
import theme from 'muse-ui/lib/theme'
import 'muse-ui/dist/muse-ui.css'
import router from './router'
import store from './store'

theme.use('dark')

Vue.prototype.moment = moment

Vue.config.productionTip = false
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
