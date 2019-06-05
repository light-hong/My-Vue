<template>
  <div>
    <h2>ID: {{$route.params.id}}</h2>
    <ul>
      <li>id: {{detail.id}}</li>
      <li>title: {{detail.title}}</li>
      <li>content: {{detail.content}}</li>
    </ul>
  </div>
</template>
<script>
const messageDetails = [
  { id: 1, title: 'Message001', content: 'message content00111....' },
  { id: 2, title: 'Message002', content: 'message content00222....' },
  { id: 4, title: 'Message004', content: 'message content00444....' },
  { id: 5, title: 'Message005', content: 'message content00555....' },
]
export default {
  data() {
    return {
      detail: {},
    }
  },
  mounted() { // 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
    const id = this.$route.params.id
    this.detail = messageDetails.find(detail => detail.id === id * 1)
  },
  watch: {
    $route: function fn() { // 改变当前路由组件参数数据时自动调用
      const id = this.$route.params.id
      this.detail = messageDetails.find(detail => detail.id === id * 1)
    },
  },
}
</script>
<style>
</style>
