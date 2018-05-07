<template>
  <div>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"></div>
    <div class="city">城市</div>
  </header>
<swiper :options="swiperOption">
  <swiper-slide v-for="item in swiperInfo" :key="item.id">
    <div class="swiper-img-con">
       <img class="swiper-img" :src="item.imgUrl"/>
    </div>
  </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      swiperOption: {
        autoplay: 3000,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  created () {
    this.getIndexData()
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc (res) {
      this.swiperInfo = res.body.data.swiper
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
