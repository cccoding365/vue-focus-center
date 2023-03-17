import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      dialogVisibility: false,
      dialogTitle: '',
      dialogType: '',
      currentTodo: {},
      todoList: []
    }
  },
  getters: {
    completeTodoList: (state) => {
      return state.todoList.filter(item => item.status)
    },
    unCompleteTodoList: (state) => {
      return state.todoList.filter(item => !item.status)
    }
  },
  actions: {
    resetDialogState() {
      this.dialogVisibility = false
      this.dialogTitle = ''
      this.dialogType = ''
      this.currentTodo = {}
    },
    // 打开 Dialog 
    openTodoDialog(id) {
      if (id) {
        console.log('修改')
        const todoItem = this.todoList.find(item => item.id === id)
        this.currentTodo = todoItem
        this.dialogTitle = '修改待办'
        this.dialogType = 'edit'
      } else {
        console.log('新建')
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
    delAllCompleted() {
      console.log('清除全部已完成')
      this.todoList = this.todoList.filter((item) => !item.status)
    },

    completeTodo(id) {
      const todoItem = this.todoList.find(item => item.id === id)
      todoItem.status = true
    },
    unCompleteTodo(id) {
      const todoItem = this.todoList.find(item => item.id === id)
      todoItem.status = false
    },
  },
  persist: {
    storage: localStorage,
  },
})
