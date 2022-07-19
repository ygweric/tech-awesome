/**
 * 执行 node server.js，访问 http://localhost:3000
 */

import express from 'express'

const server = express()
server.use(express.static('.'))

server.listen(3000, () => {
  console.log('ready open: http://localhost:3000/')
})