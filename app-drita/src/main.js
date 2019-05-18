import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false


export const eventBus = new Vue({
  data : {
    realizations : [
      {
        id : '1',
        img : 'peinture',
        work : 'PEINTURE'
      },
      {
        id : '2',
        img : 'carrelage',
        work : 'REVETEMENT'
      },
      {
        id : '3',
        img : "plomberie",
        work : 'PLOMBERIE'
      },
      {
        id : '4',
        img : "nuancier",
        work : 'DECORATION'
      },
    ]
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
