const express = require('express')
const route = express.Router()
const db = require('../models')

route.post('/createDevis', (req, res, next) => {
  db.Devis.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})



route.get('/Devis/:id', (req, res, next) => {
  db.Devis.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send(err))
})


route.get('/Devis', (req, res, next) => {
  db.Devis.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

route.patch('/Devis/:id', (req, res, next) => {
  db.Devis.update(req.body, { where: { id: req.params.id } })
    .then((response) => {
      
      db.Devis.findOne({ where: { id: req.params.id } })
      .then((response) => res.status(201).send(response))
      .catch((err) => res.status(400).send(err))
      
    })
    .catch((err) => res.status(400).send(err))
})

route.delete('/Devis/:id', (req, res, next) => {
  db.Devis.destroy({ where: { id: req.params.id } })
    .then((response) => { res.status(204).send() })
    .catch((err) => res.status(400).send(err))
})
module.exports = route
