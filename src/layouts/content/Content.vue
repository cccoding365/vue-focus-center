<template>
  <div class="content-box">
    <header>
      <input class="search" type="text" placeholder="搜索暂不可用" />
      <div class="message"></div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="less" scoped>
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
</style>

