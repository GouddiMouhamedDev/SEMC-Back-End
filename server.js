const port=3000
const express=require("express")
const app= express()
const db=require('./models')
const userRoutes=require("./Routers/user-routes")
const productRoutes=require("./Routers/product-routes")
const registerRoutes=require("./Routers/register-routes")
const clientsRoutes=require("./Routers/clients-routes")
const cors = require('cors');
app.use(cors());
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
app.use('/',userRoutes)
app.use('/',productRoutes)
app.use('/',registerRoutes)
app.use('/',clientsRoutes)
 db.sequelize.sync().then(()=>{
   app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
 }) 