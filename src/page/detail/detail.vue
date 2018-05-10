<template>
    <div >
      <p>this is detail page</p>
      <router-link to="/detail/00002">去颐和园</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
export default{
  props: ['id'],
  mounted () {
    console.log(this.id + ' ' + this.$route.query.name)
  },
  // 监控路由变化
  //  watch: {
  //  '$route' (to, from) {
  //    console.log(to)
  //    console.log(from)
  //  }
  //  }
  beforeRouteUpdate (to, from, index) {
    console.log(to)
    console.log(from)
  }
}
</script>
<style scoped>
</style>
