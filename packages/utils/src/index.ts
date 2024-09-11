import { fileURLToPath } from 'node:url'

export function test() {
  const baseUrl = fileURLToPath(new URL('.', import.meta.url))
  console.log(baseUrl)
}
