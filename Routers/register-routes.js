const express=require('express')
const route=express.Router()
const db=require('../models')
const bcrypt=require("bcrypt")
//const jwt=require("jasonwebtoken")

route.post('/register',(req,res,next)=>{

   db.User.count({where:{email:req.body.email}}).then(emailDoc=>{
     db.User.count({where:{username:req.body.username}}).then(usernameDoc=>{
       if(emailDoc!=0 || usernameDoc!=0 || req.body.password=="") {
         res.status(400).send("error")
       } else {  
         bcrypt.hash(req.body.password,10).then(hashedPassword=>{
           db.User.create({
             username:req.body.username,
             email:req.body.email,
             password:hashedPassword,
             img:req.body.img
           }).then((response)=>res.status(200).send(response))
           .catch((err)=>res.status(400).send(err))
         })
       }
     })  
   })   
 })
 


module.exports=route