const express = require('express')
const findOneRouter=express.Router()
const User = require('../createUser')

findOneRouter.get('/findOne',async (req,res)=>{
    const data = req.body
    User.findOne({username:data.username},(err,doc)=>{
        const newDoc={
            username:doc.username,
            mobile:doc.mobile,
            address:doc.address
        }
        res.send(newDoc)
    })
})


module.exports = findOneRouter