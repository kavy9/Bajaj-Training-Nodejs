const express = require('express')
const deleteRouter=express.Router()
const User = require('../createUser')

deleteRouter.delete('/delete',(req,res)=>{
    const data = req.body
    try{    
        User.findOne({username:data.username},async (err,doc)=>{
            if(err) console.log("error while finding this id ")
        await User.findByIdAndDelete(doc._id)
        console.log(doc)
        })}
        catch(e){
            res.send("error while deleting ")
            console.log("error while deleting ")
        }
    res.send("user deleted ")
})

module.exports = deleteRouter