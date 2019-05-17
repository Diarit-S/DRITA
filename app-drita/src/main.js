import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


export const eventBus = new Vue({
  data : {
    realizations : [
      {
        id : '1',
        img : 'http://www.travaux-peinture.fr/wp-content/uploads/guide-travaux-peinture.jpg'
      },
      {
        id : '2',
        img : 'assets/peinture.jpg'
      },
    ]
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
