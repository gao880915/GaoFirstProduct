<template>
<swiper :options="swiperOption">
  <swiper-slide v-for="item in swiperInfo" :key="item.id">
    <div class="swiper-img-con">
       <img class="swiper-img" :src="item.imgUrl"/>
    </div>
  </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>

<script>
export default {
  props: ['swiperInfo'],
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped>
  .swiper-img-con{
    overflow:hidden;
    width:100%;
    height:0;
    padding-bottom:31.25%;
  }
  .swiper-img{
    width:100%;
  }
</style>
