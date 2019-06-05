<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>
<script>
import List from './components/List'
import Add from './components/Add'

export default {
  data() {
    return {
      comments: [{
        name: 'Jack',
        content: 'Vue is very good!',
      },
      {
        name: 'Bob',
        content: 'Vue is very easy!',
      },
      {
        name: 'Tom',
        content: 'Vue is just so so!',
      },
      ],
    }
  },
  methods: {
      addComment (comment){
          this.comments.unshift(comment)
      },
      deleteComment (index){
          this.comments.splice(index,1)
      },
  },
  components: {
    Add,
    List,
  },
}
</script>
<style>
.reply {
  margin-top: 0px;
}
</style>
