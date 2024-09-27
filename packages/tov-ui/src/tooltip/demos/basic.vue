<docs>
---
title: 基础使用
---

这是一个 `tooltip` 组件的使用
</docs>

<script setup lang="ts">

</script>

<template>
  <t-tooltip placement="top" content="测试内容" trigger="click">
    <t-button>按钮</t-button>
    <template #content>
      <div>
        插槽测试内容
      </div>
    </template>
  </t-tooltip>
</template>

<style scoped>

</style>
