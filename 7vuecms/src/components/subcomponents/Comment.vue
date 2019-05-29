<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in comments" :key="index+'q'">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户:{{item.use_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat()}}</div>
        <div class="cmt-body">{{item.content === 'undefined'?'此用户很懒，什么也没说':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      //   this.$http.get(`getcomment/${this.id}?pageindex=${this.pageIndex}`).then((result) => {
      this.$http.get(`getcomment`).then(result => {
        if (result.body.status === 0) {
          //   this.comments = result.body.message;
          this.comments = this.comments.concat(result.body.message);
        } else {
          Toast("获取评论失败")
        }
      })
    },
    getmore() {
      this.pageIndex++
      this.getComments()
    },
    postcomment() {
      //校验评论是否为空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空")
      }
      // 发表评论
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
      this.$http
        // .post(`postcomment/${this.$route.params.id}`, {
        .post(`postcomment`, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            //拼接出一个评论对象
            let cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt)
            this.msg = ""
          } else {
            Toast("评论失败")
          }
        });
    }
  },
  props: ["id"]
};
</script>
<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
