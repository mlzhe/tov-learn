import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

const tovDir = fileURLToPath(new URL('../packages/tov-ui', import.meta.url))

const scssFiles = fg.sync(['src/**/style/index.less', '!src/style'], { cwd: tovDir })

async function complie() {
  for (const file of scssFiles) {
    const filePath = path.resolve(tovDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)],
    })
    console.log(cssCode.css)
    const esDir = path.resolve(tovDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(tovDir, `./lib${file.slice(3, file.length - 4)}css`)
    console.log(esDir, libDir)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}

complie()
