const express = require('express')
const route = express.Router()
const db = require('../models')

route.post('/createproduct', (req, res, next) => {
  db.Product.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})



route.get('/product/:id', (req, res, next) => {
  db.Product.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(400).send(err))
})


route.get('/products', (req, res, next) => {
  db.Product.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

route.patch('/product/:id', (req, res, next) => {
  db.Product.update(req.body, { where: { id: req.params.id } })
    .then((response) => {
      
      db.Product.findOne({ where: { id: req.params.id } })
      .then((response) => res.status(201).send(response))
      .catch((err) => res.status(400).send(err))
      
    })
    .catch((err) => res.status(400).send(err))
})

route.delete('/product/:id', (req, res, next) => {
  db.Product.destroy({ where: { id: req.params.id } })
    .then((response) => { res.status(204).send() })
    .catch((err) => res.status(400).send(err))
})
module.exports = route
