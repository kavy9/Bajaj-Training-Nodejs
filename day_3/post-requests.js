const express = require('express')
const bodyparser = require('body-parser')
const { append } = require('express/lib/response')

const app=express()
//app.use(express.json()) or we can use
app.use(bodyparser.json())
app.get('/products',(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
},(req,res)=>{
    console.log(req.body)
    res.send("success")
})
app.listen(3001,()=>console.log("started on 3001"))