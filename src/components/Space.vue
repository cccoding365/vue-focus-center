<template>
  <div class="container" :class="{ padding: hasPadding }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  hasPadding: Boolean
})
</script>

<style lang="less" scoped>
.container {
  margin: 20px;
  border-radius: 5px;
  background-color: var(--block-background-color-white);
  overflow: hidden;

  &.padding {
    padding: 20px 30px;
  }
}
</style>

