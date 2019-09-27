const express = require('express')
const Vent = require('./vent/model')

const app = express()

const port = process
  .env
  .PORT ||
  4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)
