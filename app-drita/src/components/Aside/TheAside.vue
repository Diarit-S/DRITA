<template>
  <div class="d-flex flex-row flex-wrap">
    <the-aside-item v-for="realization in realizations" :key="realization.id" :realization="realization"></the-aside-item>
  </div>
</template>

<script>

import TheAsideItem from './TheAsideItem';
import {eventBus} from '../../main';


export default {
  name : 'TheAside',
  components: {
    TheAsideItem
  },
  data(){
    return {
      realizations : []
    }
  },
  created(){
    this.realizations = eventBus.realizations;
  }
}
</script>

<style>

</style>
