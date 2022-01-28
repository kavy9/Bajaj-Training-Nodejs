const express = require('express');
const path= require('path')

const app=express();
app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'/data/my-html-page.html'))
})
app.listen(3001,()=>console.log("server started on 3001"))