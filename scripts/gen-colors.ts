import { blue, gold, green, red } from '@ant-design/colors'

let colors = ''
blue.forEach((color, index) => {
  colors += `--tov-color-primary-${index + 1}:${color} \n`
})

colors += '\n'
gold.forEach((color, index) => {
  colors += `--tov-color-warning-${index + 1}:${color} \n`
})

colors += '\n'

green.forEach((color, index) => {
  colors += `--tov-color-success-${index + 1}:${color} \n`
})

colors += '\n'

red.forEach((color, index) => {
  colors += `--tov-color-error-${index + 1}:${color} \n`
})

console.log(colors)
