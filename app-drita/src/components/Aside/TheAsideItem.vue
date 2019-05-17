<template>
    <div class="w-50 d-flex flex-column p-1">
      <div class="bg-light pt-4 rounded">
        <div class="image-container d-flex flex-row justify-content-center">
          <img :src="realization.img" alt="realisation" style="height : 200px;">
        </div>
        <div class="mt-2">
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
}
</script>

<style>

.image-container {
  overflow: hidden;
}

img {
  object-fit: contain;
}

.bg-light {
  box-shadow: 3px 3px 8px 0px #a1a1a1;
}

</style>
