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
    <t-button size="small" @click="handleClick">
      Primary Button
    </t-button>
    <t-button size="default" @click="handleClick">
      Primary Button
    </t-button>
    <t-button size="large" @click="handleClick">
      Default Button
    </t-button>
  </div>
</template>

<style scoped lang="scss">

</style>
