const express = require('express')
const router=express.Router()
const User = require('../createUser')
const bcrypt=require('bcrypt')

router.get('/',(req,res)=>{
    res.send("success")
})
router.post('/signup',async (req,res)=>{
    const data = req.body
    data.password = await bcrypt.hash(data.password,7)
    const user = new User({
        username : data.username,
        password:data.password,
        mobile:data.mobile,
        country:data.country,
        pincode:data.pincode,
        address:data.address+" "+data.pincode+" "+data.country
    })
    user.save((err)=>{
    if ( err && err.code !== 11000 ) {
        console.log(err);
        console.log(err.code);
        res.send('Another error showed up');
        return;
        }
    
        //duplicate key
    if ( err && err.code === 11000 ) {
        console.log("Invalid request: user already exists")
        res.send('error '+ 'User already exists');
        return;
    }
    res.send("user succesfully added")
    })//.then(()=>res.send("user added successfully"))

})
router.get('/findall',async (req,res)=>{
    const result = await User.find()
    console.log(result)
    res.send("consoled")
})

module.exports = router 

// "username":"test@1",
// "password":"test@pass2",
// "mobile":1111111111,
// "country":"India",
// "pincode":412114,
// "address":"pune"