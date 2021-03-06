//express
const express = require('express')
const app = express()

//dotenv
require('dotenv').config()
const PORT = process.env.PORT

//mongoose
require('./drivers/driver_mongoose')

//cors
const cors = require('cors')
app.use(cors())

//other
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routers
app.use('/truck', require('./routers/truck'));
app.use('/driver', require('./routers/driver'));

//upp API
app.listen(PORT, ()=>{
    console.log(`Api initialized on port: ${PORT}`)
})

