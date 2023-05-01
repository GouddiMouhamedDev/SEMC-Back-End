const express = require('express')
const route = express.Router()
const db = require('../models')

route.post('/createcontDevis', (req, res, next) => {
  db.contDevis.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})



route.get('/contDevis/:id', (req, res, next) => {
  db.contDevis.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send(err))
})


route.get('/contDevis', (req, res, next) => {
  db.contDevis.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

route.patch('/contDevis/:id', (req, res, next) => {
  db.contDevis.update({NumDevis:req.body.NumDevis,
    idClients:req.body.idClients,
    NomProduct:req.body.NomProduct,
    Qnt:req.body.Qnt,
    PrixUnitTTC:req.body.PrixUnitTTC,
    PrixTotalTTC: req.body.Qnt * req.body.PrixUnitTTC,
    TVA:req.body.TVA
   }, { where: { id: req.params.id } })
    .then((response) => {
      
      db.contDevis.findOne({ where: { id: req.params.id } })
      .then((response) => res.status(201).send(response))
      .catch((err) => res.status(400).send(err))
      
    })
    .catch((err) => res.status(400).send(err))
})

route.delete('/contDevis/:id', (req, res, next) => {
  db.contDevis.destroy({ where: { id: req.params.id } })
    .then((response) => { res.status(204).send() })
    .catch((err) => res.status(400).send(err))
})
module.exports = route
