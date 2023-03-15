<template>
  <transition name="mask">
    <div class="mask" v-if="dialogVisibility"></div>
  </transition>
  <div class="todo-content-dialog" :class="{ hidden: !dialogVisibility }">
    <header>
      <h3> {{ dialogTitle }} </h3>
      <div class="button-box">
        <button class="cancel" @click="closeTodoDialog">取消</button>
        <button class="submit" @click="submitTodoHandle">确定</button>
      </div>
    </header>
    <textarea class="textarea" v-model="currentTodo.content" placeholder="你想做点什么呢？"></textarea>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { dialogTitle, dialogType, dialogVisibility, currentTodo } = storeToRefs(todoStore)
const { openTodoDialog, closeTodoDialog, submitTodoHandle } = todoStore

</script>

<style lang="less" scoped>
.mask-enter-active {
  animation: anim 0.4s ease-in-out;
}

.mask-leave-active {
  animation: anim 0.6s ease-in-out reverse;
}

@keyframes anim {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.mask {
  z-index: 88;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.todo-content-dialog {
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  border-radius: 15px;
  padding: 2em;
  background-color: var(--block-background-color-white);

  &.hidden {
    visibility: hidden;
  }

  header {
    display: flex;
    justify-content: space-between;

    button {
      border: 0;
      background: none;
      font-size: 1.25rem;
      line-height: 2rem;
      font-weight: 600;
      cursor: pointer;
    }

    .cancel {
      color: var(--Gray-6);
    }

    .cancel:hover {
      color: var(--Gray-7);
    }

    .cancel:active {
      color: var(--Gray-8);
    }

    .submit {
      margin-left: 2rem;
      color: var(--theme-color);
    }

    .submit:hover {
      color: var(--Theme-7);
    }

    .submit:active {
      color: var(--Theme-9);
    }
  }

  .textarea {
    display: flex;
    width: 100%;
    min-height: 4rem;
    margin: 2rem 0 2rem 0;
    border: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    outline: none;
    resize: none;
  }

  .textarea::placeholder {}
}</style>