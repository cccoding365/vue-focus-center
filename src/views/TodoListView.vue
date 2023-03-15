<script setup>
import { ref, reactive } from 'vue'
import Space from '../components/Space'
import TodoContentDialog from '../components/todolist/TodoContentDialog'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { title, visibility, todoList } = storeToRefs(todoStore)
const { openTodoDialog, closeTodoDialog, editTodo, removeTodo } = todoStore

</script>

<template>
  <div class="todolist-container">
    <header>
      <h2>我的待办</h2>
      <div class="button-box">
        <button class="back-today">
          <svg-icon icon-class="icon-repeat"></svg-icon>
          回到今天
        </button>
        <button class="add-todo" @click="openTodoDialog()">
          新建待办
        </button>
      </div>
    </header>
    <main>
      <Space v-if="todoList.length">
        <ul>
          <li class="todo-item" v-for="(todo, index) of todoList">
            <input type="checkbox" :checked="todo.status" v-model="todo.status">
            <span>{{ todo.content }}</span>
            <div class="btn-box">
              <button @click="openTodoDialog(todo.id)">编辑</button>
              <button @click="removeTodo(index)">删除</button>
            </div>
          </li>
        </ul>
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
  <TodoContentDialog />
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
  .todo-item {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 0 30px;
    cursor: pointer;

    input {
      margin-right: 10px;
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