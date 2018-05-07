<template>
  <div>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"></div>
    <div class="city">城市</div>
  </header>
<swiper :options="swiperOption">
  <swiper-slide>
    <div class="swiper-img-con">
       <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/3c/b2e542d1649a9b02.jpg_890x330_ae9ba0f1.jpg"/>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="swiper-img-con">
     <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1803/30/cea146e3d2eda002.jpg_890x330_f72cb574.jpg"/>
    </div>
  </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
  <div>
    12313213213
  </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal'
      }
    }
  }
}
</script>

<style scoped>
  .header{
    display:flex;
    height:0.86rem;
    background:#05bad5;
    color:#fff;
  }
  .back{
    width:.64rem;
    line-height:.86rem;
    text-align: center;
  }
  .search{
    flex:1;
    margin:.14rem .18rem;
    background:#fff;
    border-radius:.1rem;
  }
  .city{
    width:0.7rem;
    padding-right: 0.44rem;
    line-height:.86rem;
    text-align:left;
    text-overflow:ellipsis;
    text-wrap:nowrap;
  }
  .city:after{
    content:"";
    display:block;
    width:0px;
    height:0px;
    border:0.1rem solid #fff;
    border-color:white transparent transparent transparent;
    position:absolute;
    right:0.3rem;
    top:0.36rem;
  }
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
