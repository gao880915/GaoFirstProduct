<template>
  <div>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"></div>
    <div class="city">城市</div>
  </header>
<index-swiper :swiperInfo="swiperInfo"></index-swiper>
<icon-swiper :pages="pages"></icon-swiper>
    <ul>
      <li style="height: .5rem;" v-for="item in childList" :key="item.id">
        <router-link style="height: .5rem;" :to="'/detail/' + item.id">
          <div style="font-size:.5rem;background: lightblue;line-height: .5rem;">
            {{item.name}}
          </div>
        </router-link>
      </li>
    </ul>
    <button @click="handleClickPush('0003')"> handleClickPush </button>
    <button @click="handleClickReplace('0004')"> handleClickReplace </button>
    <button @click="handleClickName('0005')"> handleClickName </button>
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
      iconInfo: [],
      childList: [{
        'id': '0001',
        'name': '北京'
      }, {
        'id': '0002',
        'name': '上海'
      }]
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
    handleClickPush (id) {
      // 编程式导航
      this.$router.push('/detail/' + id)
    },
    handleClickReplace (id) {
      // 编程式导航
      this.$router.replace('/detail/' + id + '/ticket')
    },
    handleClickName (id) {
      this.$router.push({
        name: 'sight',
        params: {
          id: id
        },
        query: {
          name: 'dell'
        }
      })
    }
  },
  created () {
    this.getIndexData()
  },
  activated () {
    console.log('activated')
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
