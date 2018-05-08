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
    console.log(this.id)
  }
}
</script>
<style scoped>
</style>
