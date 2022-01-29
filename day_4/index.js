const express = require('express')
const sampleRoute = require('./routes/sample')
const findOneRouter = require('./routes/findUser')
const UpdateRouter = require('./routes/updateUser')
const deleteRouter = require('./routes/deleteUser')
const User = require('./createUser')


const app=express();
app.use(express.json())
app.use("/",sampleRoute)
app.use('/',findOneRouter)
app.use('/',UpdateRouter)
app.use('/',deleteRouter)
app.listen(3001,()=>console.log("server started"))