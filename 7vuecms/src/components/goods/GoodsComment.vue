<template>
  <div class="cmtbox">
    <cmtBox :id="$route.params.id"></cmtBox>
  </div>
</template>
<script>
import cmtBox from '../subcomponents/Comment.vue'
export default {
  components: {
    cmtBox
  }
}
</script>
<style lang="less" scoped>
.cmtbox {
    padding-bottom: 15px;
}
</style>
