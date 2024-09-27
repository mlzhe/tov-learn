import type { PropType, VNode } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { offset, useFloating } from '@floating-ui/vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassNames } from '@tov-ui/utils'

export default defineComponent({
  name: 'TTooltip',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-center',
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(_props, { slots }) {
    const reference = ref(null)
    const floating = ref(null)
    const show = ref(false)
    const placement = computed(() => _props.placement)
    const { c } = useClassNames('tooltip')
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(6)],
    })

    let timer: ReturnType<typeof setTimeout> | undefined

    const handleMouseEnter = () => {
      if (_props.trigger !== 'hover')
        return
      show.value = true
    }
    const handleClick = () => {
      if (_props.trigger !== 'click')
        return
      show.value = true
    }
    const handleMouseLeave = () => {
      timer = setTimeout(() => {
        show.value = false
      }, 150)
    }
    return () => {
      const renderTooltip = () => {
        if (!reference.value)
          return null
        if (!show.value)
          return null
        const cls = {
          [c()]: true,
        }
        const events = {
          onMouseenter: () => {
            if (timer)
              clearTimeout(timer)
            timer = undefined
          },
          onMouseleave: () => {
            show.value = false
          },
        }
        return <div {...events} class={cls} ref={floating} style={floatingStyles.value}>{slots.content ? slots.content?.() : _props.content}</div>
      }

      const children = filterEmpty(slots.default?.()) // 过滤空节点
      if (children && children.length < 1)
        return null

      if (children.length > 1) {
        console.warn('Tooltip can only have one child')
        return children
      }

      const node = children[0]
      if (isBaseType(node)) {
        console.warn('Tooltip can only have a child component')
        return node
      }

      const events = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,

      }

      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })

      return (
        <>
          {tipNode}
          {renderTooltip()}
        </>
      )
    }
  },
})
