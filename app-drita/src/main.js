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
        img : 'peinture',
        work : 'CARRELAGE'
      },
      {
        id : '3',
        img : "peinture",
        work : 'PLOMBERIE'
      },
      {
        id : '4',
        img : "peinture",
        work : 'REVETEMENT'
      },
    ]
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
