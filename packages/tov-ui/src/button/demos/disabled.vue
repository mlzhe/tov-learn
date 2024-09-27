<docs>
---
title: 基础使用
---

这是一个 `button` 组件的使用
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <t-button disabled @click="handleClick">
      Default Button
    </t-button>
    <t-button disabled type="primary" @click="handleClick">
      Primary Button
    </t-button>
  </div>
</template>

<style scoped lang="scss">

</style>
