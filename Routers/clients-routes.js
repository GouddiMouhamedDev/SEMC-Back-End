const express = require('express')
const route = express.Router()
const db = require('../models')

route.post('/createclient', (req, res, next) => {
  db.Clients.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})



route.get('/clients/:id', (req, res, next) => {
  db.Clients.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send(err))
})


route.get('/clients', (req, res, next) => {
  db.Clients.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

route.patch('/client/:id', (req, res, next) => {
  db.Clients.update(req.body, { where: { id: req.params.id } })
    .then((response) => {
      
      db.Clients.findOne({ where: { id: req.params.id } })
      .then((response) => res.status(201).send(response))
      .catch((err) => res.status(400).send(err))
      
    })
    .catch((err) => res.status(400).send(err))
})

route.delete('/client/:id', (req, res, next) => {
  db.Clients.destroy({ where: { id: req.params.id } })
    .then((response) => { res.status(204).send() })
    .catch((err) => res.status(400).send(err))
})
module.exports = route
