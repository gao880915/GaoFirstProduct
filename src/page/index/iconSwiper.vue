<template>
 <swiper :options="swiperOption">
  <swiper-slide v-for="(pageinfo,index) in pages" :key="index">
    <div class="icon-wrapper">
      <div v-for="item in pageinfo" :key="item.id" class="icon-item">
        <div class="icon-img-con">
          <img class="icon-img" :src="item.imgUrl"/>
        </div>
      </div>
    </div>
  </swiper-slide>
</swiper>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style scoped>
  .icon-item{
    box-sizing:border-box;
    width:25%;
    float:left;
    padding:.4rem;
  }
  .icon-img-con{
    width:100%;
    height:0;
    padding-bottom:100%;
  }
  .icon-img{
    width:100%;
  }
</style>
