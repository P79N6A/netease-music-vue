import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// if (module.hot) {
//   // accept actions and mutations as hot modules
//   module.hot.accept(['./components/*'], () => {
//     // require the updated modules
//     // have to add .default here due to babel 6 module output
//     const store = require('./store').default;
//     // swap in the new modules and mutations
//     store.hotUpdate({
//       store: store
//     })
//   })
// }
