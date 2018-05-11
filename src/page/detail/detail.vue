<template>
    <div >
      <div class="wrapper">
        <img class="img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="" />
        <p class="text">this is detail pagethis is detail pagethis is detail pagethis is detail pagethis is detail page</p>
      </div>
      <!--<router-link to="/detail/00002">去颐和园</router-link>
      <router-view></router-view>-->
    </div>
</template>
<script>
export default{
  //  props: ['id'],
  //  mounted () {
  //  console.log(this.id + ' ' + this.$route.query.name)
  //  },
  // 监控路由变化
  //  watch: {
  //  '$route' (to, from) {
  //    console.log(to)
  //    console.log(from)
  //  }
  //  }
  //  beforeRouteUpdate (to, from, index) {
  //  console.log(to)
  //  console.log(from)
  //  }
}
</script>
<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl';
  .wrapper
    display: flex
    .img
      width: active.6rem
    .text
      flex: 1
      background:$backgroundColor
</style>
