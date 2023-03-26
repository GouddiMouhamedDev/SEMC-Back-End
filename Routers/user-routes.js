const express=require('express')
const route=express.Router()
const db=require('../models')
const jwt=require('jsonwebtoken')



route.get('/user/:id',(req,res,next)=>{
    db.User.findOne({where:{id:req.params.id}})
.then((response)=>res.status(201).send(response))
.catch((err)=>res.status(400).send(err))
})


route.get('/users',(req,res,next)=>{
    db.User.findAll()
.then((response)=> res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
})

  route.patch('/user/:id',(req,res,next)=>{
    db.User.update(req.body,{where:{id:req.params.id}})
.then((response)=> res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
})

  route.delete('/user/:id',(req,res,next)=>{
    db.User.destroy({where:{id:req.params.id}})
.then((response)=> res.status(204).send())
  .catch((err)=>res.status(400).send(err))
})
module.exports=route