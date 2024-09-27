<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassNames } from '@tov-ui-learn-copy/utils'

export default defineComponent({
  name: 'TButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'default' | 'small' | 'large'>,
      default: 'default',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }

    const { c, cx, cm } = useClassNames('button')

    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return {
      handleClick,
      cls,
    }
  },
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped lang="scss"></style>
