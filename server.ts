import express, { Request, Response } from 'express'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use((req, res, next) => {
    req.test = 'test'
    next()
  })
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res)
  })
  server.listen(port, (err?: any) => {
    if (err) throw err
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
  })

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})
