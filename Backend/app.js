const express =require ('express')
const app= express()
const dotenv = require ('dotenv').config()
const router = require('./routes/route')
const db = require('./config/dbConnection')

const port = process.env.PORT || 5000


db.connect((err) => {
    if (err) console.log("connection err" + err);
    else console.log("Mongodb connected");
  })


app.use('/',router)






app.listen(port,()=>{
    console.log(`Server Started on ${port}`);
})