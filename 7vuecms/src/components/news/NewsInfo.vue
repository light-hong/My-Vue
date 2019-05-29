<template>
  <div class="newsinfo-container">
    <!-- 标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time | dateFormat()}}</span>
      <span>点击:{{newsinfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容 -->
    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
//导入评论子组件
import comments from "../subcomponents/Comment.vue"

export default {
  data() {
    return {
      id: this.$route.params.id, //将URL中的Id挂载到data上
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      //this.$http.get('getnew/'+this.id).then((result) => {
      this.$http.get("getnew").then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0]
        } else {
          Toast("暂无新闻！")
        }
      });
    }
  },
  components: {
    'comment-box':comments
  }
};
</script>
<style lang="less">
.newsinfo-container {
  padding: 0 4px 15px 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
