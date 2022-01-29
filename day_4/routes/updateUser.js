const express = require('express')
const UpdateRouter=express.Router()
const User = require('../createUser')

UpdateRouter.put('/update',(req,res)=>{
    const data = req.body
   // const updateRes = User.updateOne({username:data.username},{password:data.password})
   User.findOne({username:data.username},async (err,doc)=>{
    await User.findByIdAndUpdate(doc._id,{password:data.updatedpassword})
    console.log(doc)
    })
    res.send("updated")
})


module.exports = UpdateRouter