<template>
  <div id="app">
    <Header/>
    <div class="d-flex flex-row" >
      <the-main class="w-50"></the-main>
      <the-aside class="w-50"></the-aside>
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

</style>
