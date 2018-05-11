<template>
  <div id="">
    <slot ref="test"></slot>
  </div>
</template>
<script type="text/javascript">
export default {
  mounted () {
    console.log(this.$slots)
  }
}
</script>
<style type="text/css" scoped>
</style>
