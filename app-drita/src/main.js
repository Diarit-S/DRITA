import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


export const eventBus = new Vue({
  data : {
    realizations : [
      {
        id : '1',
        img : 'http://www.travaux-peinture.fr/wp-content/uploads/guide-travaux-peinture.jpg',
        work : 'PEINTURE'
      },
      {
        id : '2',
        img : 'https://www.maisonentravaux.fr/wp-content/uploads/2018/07/tarif-horaire-carrelage-200x200.jpg',
        work : 'CARRELAGE'
      },
      {
        id : '2',
        img : 'https://www.maisonentravaux.fr/wp-content/uploads/2018/07/tarif-horaire-carrelage-200x200.jpg',
        work : 'CARRELAGE'
      },
    ]
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
