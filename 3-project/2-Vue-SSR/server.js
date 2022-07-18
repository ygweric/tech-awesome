/**
 * 执行 node server.js，访问 http://localhost:3000
 */

import express from 'express'
import { createSSRApp, createApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const server = express()
/*
server.get('/v1', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 12 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})
*/

server.get('/', (req, res) => {
  const app = createSSRApp()
  renderToString(app).then(html => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <script type="importmap">
        {
          "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
          }
        }
      </script>
      <script type="module" src="/client.js"></script>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})
server.use(express.static('.'))

server.listen(3000, () => {
  console.log('ready')
})