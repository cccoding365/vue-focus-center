<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.container {
  margin: 20px;
  // padding: 20px 30px;
  border-radius: 5px;
  background-color: var(--block-background-color-white);
  overflow: hidden;
}
</style>

