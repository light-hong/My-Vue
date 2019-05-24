<template>
  <div>
    <h3>这是account的登录子组件</h3>
    <mt-button type="default" size="small">default</mt-button>
    <mt-button type="primary" icon="back" @click="show">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {};
  },
  methods: {
    show() {
      Toast({
        message: "提示",
        position: "middle",
        duration: 2000
      })
    }
  }
};
</script>
<style>
</style>
