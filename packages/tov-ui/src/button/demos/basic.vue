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
    <t-button @click="handleClick">
      Default
    </t-button>
    <t-button type="primary" @click="handleClick">
      Primary
    </t-button>
    <t-button type="warning" @click="handleClick">
      Warning
    </t-button>
  </div>
</template>

<style scoped lang="scss">

</style>
