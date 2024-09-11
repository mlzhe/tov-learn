<script setup lang="ts">
import { ref } from 'vue'
import { useClassNames } from '../gen-class'

const { c, cx, ce, cm } = useClassNames('button')

const testRef = ref(false)
function handleClick() {
  testRef.value = !testRef.value
}

const cls = cx(() => {
  return {
    c: true,
    d: testRef.value,
  }
})
</script>

<template>
  <div :class="c('primary')" />
  {{ c('header', ce('title'), cm('light')) }}
  <button @click="handleClick">
    按钮
  </button>
  {{ cls }}
</template>

<style scoped>

</style>
