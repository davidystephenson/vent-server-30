const express = require(
  'express'
)
const ventRouter = require(
  './vent/router'
)
const bodyParser = require(
  'body-parser'
)
const cors = require('cors')

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.use(ventRouter)

const port = process
  .env
  .PORT ||
  4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)
