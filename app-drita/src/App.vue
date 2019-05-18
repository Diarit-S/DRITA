<template>
  <div id="app">
    <Header/>
    <div class="all-container" >
      <the-main class="col-md-6"></the-main>
      <the-aside class="col-md-6"></the-aside>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TheMain from './components/TheMain.vue'
import TheAside from './components/Aside/TheAside'

export default {
  name: 'app',
  components: {
    Header,
    TheMain,
    TheAside
  }
}
</script>

<style>

body {
  background-color: #ececec;
}

.all-container {
  display: flex;
  flex-direction: row;
}

@media(max-width:767px){
  .all-container {
    flex-direction: column;
  }
}



</style>
