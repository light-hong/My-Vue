<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- $on()可以通过ref属性将事件绑定到组件上 -->
      <!-- <TodoHeader ref="header"/> -->
      <!-- 自定义事件通信 -->
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <!-- <todo-footer
        :todos="todos"
        :deletedCompletedTodos="deletedCompletedTodos"
        :selectTodos="selectTodos"
      /> -->
      <todo-footer>
        <input type="checkbox" v-model="isAllcheck" slot="checkAll">
        <span slot="count">已完成{{completedTodos}} / 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="completedTodos" @click="deletedCompletedTodos">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import storageUtil from './components/util/storageUtil'

/* 
  绑定事件监听 ----------- 订阅消息
  触发事件 ------------ 发布消息
*/

export default {
  data() {
    return {
      //从localStorage读取数据
      // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]'),
      todos: storageUtil.readTodos()
    }
  },
  computed: {
    completedTodos() {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllcheck: {
      get() {
        return this.completedTodos === this.todos.length && this.completedTodos>0
      },
      set(value) {
        this.selectTodos(value)
      },
    },
  },
  mounted() {
    //$on()绑定事件通信
    // this.$refs.header.$on('addTodo', this.addTodo)
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  watch: {
    todos: {
      deep: true,   //深度监视
      /* handler: function (value) {
        //将todos中最新的Json数据，保存到localStroage
        // window.localStorage.setItem('todos_key', JSON.stringify(value))
        storageUtil.saveTodos(value)
      } */
      handler: storageUtil.saveTodos
    },
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    deletedCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectTodos(isCheck) {
      this.todos.forEach(todo => todo.complete = isCheck)
    },
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
}
</script>
<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
