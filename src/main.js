import Vue from 'vue'
import App from './App.vue'
import VueCoolUi from '../packages'

Vue.use(VueCoolUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
