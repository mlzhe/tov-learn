import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
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

const baseUrl = fileURLToPath(new URL('../', import.meta.url)) // 获取根目录
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/src/style/theme/colors.scss')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)

console.log('生成样式文件成功')
