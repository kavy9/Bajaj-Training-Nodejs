const express = require('express')
const signinrouter=express.Router()
const User = require('../createUser')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

signinrouter.post('/signin',async (req,res)=>{
    try{    
    const data = req.body
    //data.usernmae data.password 
    console.log(data.password)
    data.password = await bcrypt.hash(data.password,7)
    const user = User.findOne({username:data.username})
    console.log(user.password)
    const authenticate=await bcrypt.compare(data.password,user.password)
    if(authenticate){
        // const token = jwt.sign({username:user.username},"jamesbond")//or we can give other key than jamesbond 
        // console.log(token)
        res.send("signed in successfully")
        // const signinInfo={
        //     msg:"succesfully signed in ",
        //     jwttoken:token
        // }
    }
    else{
        res.send("Incorrect Password")
    }
    }
    catch(e){
        console.log("an error occcured ")
        console.log(e)
        res.send("error while requesting")
    }
})

module.exports = signinrouter
//testpassword