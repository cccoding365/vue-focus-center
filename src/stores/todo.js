import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      dialogVisibility: false,
      dialogTitle: '',
      dialogType: '',
      currentTodo: {},
      todoList: [
        { id: 1, content: '吃饭', status: false },
        { id: 2, content: '睡觉', status: true },
        { id: 3, content: '打豆豆', status: false },
      ]
    }
  },
  actions: {
    resetDialogState() {
      this.dialogVisibility = false
      this.dialogTitle = ''
      this.dialogType = ''
    },
    openTodoDialog(id) {
      if (id) {
        const todoItem = this.todoList.find(item => item.id === id)
        this.currentTodo = todoItem
        this.dialogTitle = '修改待办'
        this.dialogType = 'edit'
      } else {
        this.currentTodo = {}
        this.dialogTitle = '新建待办'
        this.dialogType = 'add'
      }
      this.dialogVisibility = true
    },
    closeTodoDialog() {
      this.resetDialogState()
    },

    submitTodoHandle() {
      if (this.currentTodo.id) {
        this.closeTodoDialog()
      } else {
        this.addTodo(this.currentTodo)
      }
    },

    addTodo(data) {
      this.todoList.unshift({
        id: new Date().getTime(),
        ...data,
        status: false
      })
      this.closeTodoDialog()
    },

    removeTodo(index) {
      console.log(index)
      this.todoList.splice(index, 1)
    },

    completeTodo(id) {
      const todoItem = this.todoList.find(item => item.id === id)
      todoItem.status = true
    },
    unCompleteTodo(id) {
      const todoItem = this.todoList.find(item => item.id === id)
      todoItem.status = false
    },
  }
})
