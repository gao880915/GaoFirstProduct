<template>
  <div>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"></div>
    <div class="city">城市</div>
  </header>
<index-swiper :swiperInfo="swiperInfo"></index-swiper>
<icon-swiper :pages="pages"></icon-swiper>
  <div>
     <!--<button @click="handleClick(1)">查看详细1</button>
     <button @click="handleClick(2)">查看详细2</button>-->
     <router-link>查看详细1</router-link>
     <router-link>查看详细2</router-link>
  </div>
  </div>
</template>

<script>
import IndexSwiper from './swiper'
import IconSwiper from './iconSwiper'
export default {
  name: 'Index',
  components: {
    IndexSwiper,
    IconSwiper
  },
  data () {
    return {
      swiperInfo: [],
      iconInfo: []
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.swiperInfo = res.body.data.swiper
        this.iconInfo = body.data.icons
      }
    },
//  handleClick (id) {
//    this.$router.push('/detail/' + id)
//  }
  },
  created () {
    this.getIndexData()
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
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
</style>
