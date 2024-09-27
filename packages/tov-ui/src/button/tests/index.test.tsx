import { mount } from '@vue/test-utils'
import { Button } from 'tov-ui'

describe('button', () => {
  it('should work', () => {
    const wrapper = mount(<Button type="primary"></Button>)
    const btnEl = wrapper.find('button')
    const hansPrimary = btnEl.element.classList.contains('tov-button--primary')
    console.log(hansPrimary)
    expect(hansPrimary).toBe(true)
    wrapper.unmount()
  })

  it('size', () => {
    const wrapper = mount(<Button size="small"></Button>)
    const btnEl = wrapper.find('button')
    expect(btnEl.element.classList.contains('tov-button-size--small')).toBe(true)
    wrapper.unmount()
  })

  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
    wrapper.trigger('click')
    expect(clickState).toBe(true)
    wrapper.unmount()
  })
})
