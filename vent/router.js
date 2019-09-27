const { Router } = require('express')
const Vent = require('./model')

const router = new Router()

function getVents (
  request,
  response,
  next
) {
  Vent
    .findAll()
    .then(
      vents => response
        .send(vents)
    )
    .catch(next)
}

router.get('/vent', getVents)

function createVent (
  request,
  response,
  next
) {
  Vent
    .create(request.body)
    .then(
      vent => response.send(vent)
    )
    .catch(next)
}

router.post('/vent', createVent)

module.exports = router
