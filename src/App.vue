<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { routers } from './config'

</script>

<template>
  <div class="app-container">
    <div class="menu-box">
      <div class="logo-box">
        <img src="./image/logo.jpg">
        <h3 class="app-name">Focus Center</h3>
      </div>
      <div class="user-info">
        <div class="username">小葱伴逗虎</div>
      </div>
      <div class="nav-box">
        <RouterLink class="nav-item" :class="router.class" v-for="router of routers" :to="router.to">
          <!-- <svg-icon :icon-class="router.iconClass"></svg-icon> -->
          {{ router.value }}
        </RouterLink>
      </div>
    </div>
    <div class="content-box">
      <header>
        <input class="search" type="text" placeholder="搜索暂不可用" />
        <div class="message"></div>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  display: flex;

  .menu-box {

    min-width: var(--menu-width);
    height: 100vh;
    background-color: var(--block-background-color-white);

    .logo-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      img {
        width: var(--logo-width);
        height: var(--logo-height);
        border-radius: 50%;
        margin-right: 20px;
      }
    }

    .user-info {
      display: flex;
      justify-content: center;
    }

    .nav-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      .nav-item {
        display: flex;
        // justify-content: center;
        align-items: center;
        width: 70%;
        margin: 5px 0;
        padding: 10px;
        border-radius: var(--nav-border-radius);

        &:hover {
          background-color: var(--nav-hover-background-color);
        }
      }
    }
  }

  .content-box {
    width: 100%;

    header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 6rem;

      .search {
        width: 19.5rem;
        height: 2.5rem;
        padding: 0 1.5rem;
        border: none;
        border-radius: 2.5rem;
        background-color: var(--block-background-color-white);
      }

      .message {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 20px;
        border-radius: 2.5rem;
        background-color: var(--block-background-color-white);
      }
    }
  }
}
</style>
