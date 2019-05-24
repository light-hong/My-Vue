<template>
  <div>
    <h3>login.vue组件-----{{msg}}</h3>
  </div>
</template>

<script>
export default {
    //组件中的data必须是函数且返回对象
    data() {
        return {
            msg:'123'
        }
    },
    methods: {
        show(){
            console.log('login.vue组件的方法')
        }
    },
}
</script>
<style>
</style>
