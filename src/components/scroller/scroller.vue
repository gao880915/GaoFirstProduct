<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  props: ['data'],
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    data () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }
}
</script>
<style type="text/css" scoped>
</style>
