<template>
  <div class="menu-box">
    <!-- 应用 LOGO  -->
    <div class="logo-box">
      <img src="@/image/logo.jpg">
      <h3 class="app-name">Focus Center</h3>
    </div>

    <!-- 用户信息 -->
    <div class="user-info">
      <div class="username">小葱伴逗虎</div>
    </div>

    <!-- 路由导航菜单 -->
    <div class="nav-box">
      <RouterLink class="nav-item" :class="router.class" v-for="router of routers" :to="router.to">
        <!-- <svg-icon :icon-class="router.iconClass"></svg-icon> -->
        {{ router.value }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { routers } from '@/config'
</script>

<style lang="less" scoped>
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
      color: var(--menu-item-color);
      align-items: center;
      width: 70%;
      margin: 5px 0;
      padding: 5px 20px;
      border-radius: var(--nav-border-radius);

      &:hover {
        background-color: var(--nav-hover-background-color);
      }
    }

    .router-link-active {
      background-color: var(--theme-color-light);
    }
  }
}
</style>