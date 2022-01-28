//1.render htmlm pages 
//static rendering and dynamic rendoring
// 
const express = require('express')
const app=express()
app.use(express.json());
app.get("/products/:prname/:price",(req,res)=>{
    console.log(req.params)
    res.send("something")
})
app.post("/products",(req,res)=>{
    console.log(req)
    console.log(req.body)
    const one  = req.body.one
    res.send({"status":200,"received":"yessss"})

})
app.all("*",(req,res)=>{
    res.status(404).send("File not Found")
})
app.listen(3001,()=>console.log("server started "))