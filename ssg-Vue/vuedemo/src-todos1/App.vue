<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer
        :todos="todos"
        :deletedCompletedTodos="deletedCompletedTodos"
        :selectTodos="selectTodos"
      />
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      //从localStorage读取数据
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]'),
    }
  },
  watch: {
    todos: {
      deep: true,   //深度监视
      handler: function (value) {
        //将todos中最新的Json数据，保存到localStroage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
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
