<script setup>
import { ref, reactive, computed } from 'vue'
import Space from '@/components/Space'
import TodoDialog from '@/components/todo/TodoDialog'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { title, visibility, todoList, completeTodoList } = storeToRefs(todoStore)
const { openTodoDialog, closeTodoDialog, editTodo, removeTodo, delAllCompleted } = todoStore

let showTodoListType = ref('all')

const showTodoList = computed(() => {
  return showTodoListType.value == 'completed' ? todoList.value.filter(i => i.status)
    : showTodoListType.value == 'unCompleted' ? todoList.value.filter(i => !i.status)
      : todoList.value
})

const unCompletedNum = computed(() => {
  return todoList.value.filter((item) => !item.status).length
})



</script>

<template>
  <div class="todolist-container">
    <header>
      <h2>我的待办</h2>
      <div class="button-box">
        <button class="back-today">
          <!-- <svg-icon icon-class="icon-repeat"></svg-icon> -->
          回到今天
        </button>
        <button class="add-todo" @click="openTodoDialog()">
          新建待办
        </button>
      </div>
    </header>
    <main>
      <Space class="todolist-container" v-if="todoList.length">
        <ul>
          <li class="todo-item" v-if="!showTodoList.length">该情况下无待办</li>
          <li class="todo-item" :class="{ checked: todo.status }" v-for="(todo, index) of showTodoList">
            <input type="checkbox" :checked="todo.status" v-model="todo.status">
            <span>{{ todo.content }}</span>
            <div class="btn-box" v-if="!todo.status">
              <button @click="openTodoDialog(todo.id)">编辑</button>
              <button @click="removeTodo(index)">删除</button>
            </div>
          </li>
        </ul>
        <footer>

          <span :class="{ selected: showTodoListType == 'all' }" @click="showTodoListType = 'all'">全部</span>
          <span :class="{ selected: showTodoListType == 'completed' }" @click="showTodoListType = 'completed'">已完成</span>
          <span :class="{ selected: showTodoListType == 'unCompleted' }"
            @click="showTodoListType = 'unCompleted'">未完成</span>

          <span class="clearAllCompeleted" v-show="todoList.length > unCompletedNum" @click="delAllCompleted"> 清除已完成
          </span>
        </footer>
      </Space>
      <Space v-else>
        <div class="todo-list-empty">
          <h2>
            暂无待办事宜 请点击 <span style="color: var(--theme-color);">右上方按钮</span> 新建待办
          </h2>
        </div>
      </Space>
    </main>
  </div>
  <TodoDialog />
</template>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  padding: 0 20px;

  h2 {
    color: var(--title-text-color);
  }

  .button-box {
    display: flex;
    justify-content: flex-end;
  }

  .back-today {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 2rem;
    border: 1px solid var(--Gray-2);
    margin-left: 1rem;
    color: var(--Gray-6);
    font-size: 0.75rem;
    line-height: 1rem;
    border-radius: 2rem;
    background-color: var(--BG);
    cursor: pointer;
  }

  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 2rem;
    border: none;
    margin-left: 1rem;
    color: var(--block-background-color-white);
    font-size: 0.75rem;
    line-height: 1rem;
    border-radius: 2rem;
    background-color: var(--theme-color);
    cursor: pointer;

    &:hover {
      background-color: var(--theme-color-dark);
    }
  }
}

main {
  .todolist-container {
    footer {
      border-top: 1px solid #00000010;
      padding: 20px 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        padding: 5px 10px;
        cursor: pointer;

        &.selected {
          color: var(--theme-color);
        }
      }

      .clearAllCompeleted {
        padding: 5px 30px;
        border-radius: 5px;
        margin-left: auto;
        cursor: pointer;

        &:hover {
          color: aliceblue;
          background-color: red;
        }
      }
    }
  }

  .todo-item {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 0 30px;
    cursor: pointer;

    input {
      width: 25px;
      height: 25px;
      margin-right: 20px;
    }

    &.checked {
      opacity: .5;
    }

    .btn-box {
      margin-left: auto;
      display: none;
    }

    &:hover {
      background-color: var(--item-hover-background-color);

      .btn-box {
        display: block;
      }
    }
  }

  button {
    margin: 0 10px;
    border: 0;
    background: none;
    line-height: 2rem;
    font-weight: 600;
    cursor: pointer;
  }

  .todo-list-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 500px;
    color: var(--title-text-color);
  }
}
</style>
