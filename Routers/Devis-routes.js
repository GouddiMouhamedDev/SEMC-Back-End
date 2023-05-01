const express = require('express')
const route = express.Router()
const db = require('../models')

route.post('/createDevis', (req, res, next) => {
  db.Devis.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})



route.get('/Devis/:NumDevis', (req, res, next) => {
  db.Devis.findOne({ where: { NumDevis: req.params.NumDevis } })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send(err))
})


route.get('/Devis', (req, res, next) => {
  db.Devis.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

route.patch('/Devis/:NumDevis', (req, res, next) => {
  db.Devis.update(req.body, { where: { NumDevis: req.params.NumDevis } })
    .then((response) => {
      
      db.Devis.findOne({ where: { NumDevis: req.params.NumDevis } })
      .then((response) => res.status(201).send(response))
      .catch((err) => res.status(400).send(err))
      
    })
    .catch((err) => res.status(400).send(err))
})

route.delete('/Devis/:NumDevis', (req, res, next) => {
  db.Devis.destroy({ where: { NumDevis: req.params.NumDevis } })
    .then((response) => { res.status(204).send() })
    .catch((err) => res.status(400).send(err))
})
module.exports = route
