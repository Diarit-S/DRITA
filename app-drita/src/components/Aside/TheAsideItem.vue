<template>
    <div class="w-50 d-flex flex-column p-1">
      <div class="card rounded">
        <div class="card__image-container">
          <img :src="getImg"  alt="realisation" style="width : 100%;">
        </div>
        <div>
          <h3 class="text-center">{{realization.work}}</h3>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name : 'TheAsideItem',
  props : {
    realization : {
    }
  },
  computed : { 
    // function to get the image of each card based on the event bus img writed
    getImg(){
      return require(`../../assets/${this.realization.img}.jpg`)
    }
  }
}
</script>

<style>

.card__image-container {
  overflow: hidden;
  max-height: 35vh;
}

img {
  border-radius: 5px 5px 0 0;
}

.card {
  cursor: pointer;
  box-shadow: 3px 3px 8px 0px #a1a1a1;
  transition: all 0.1s ease-in-out;
  opacity: 0.8;
}
.card:hover {
  transform: scale(0.98);
  box-shadow: 1px 1px 8px 0px #a1a1a1;
  opacity: 1;
}
.test-classe {
  
}

</style>
