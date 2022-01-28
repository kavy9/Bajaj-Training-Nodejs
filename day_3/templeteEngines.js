const { json } = require('body-parser');
const express = require('express');
const fs=require('fs')
const app = express();
app.set("view engine","jade")
//app.set("view engine","hbs")

var myLogger =  (req, res, next)=> {
    fs.readFile('./data/templeteEngine-logs.json',(err,file)=>{
        //console.log(file.toString())
        let myJson = JSON.parse(file);
        const newObj = {
            url:req.url,
            logTime:new Date().toString()
        }
        myJson.push(newObj)
        console.log(myJson)
        fs.writeFile('./data/templeteEngine-logs.json',JSON.stringify(myJson),(err)=>{if(err)console.log("error while inserting the file ")})
    })
    console.log('LOGGED')
    next()
  }
//app.use(myLogger)
let array = ["one","two","three","four"]
app.get('/index',myLogger,(req,res)=>{
    res.render("index",{arrayOne:array});
})
app.listen(3001,()=>{
    console.log("hosting on 3001")
})
