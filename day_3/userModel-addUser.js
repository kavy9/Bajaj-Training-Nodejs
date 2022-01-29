const moongoose = require('mongoose')
const User = require('./userModel')

const user1 = new User({
    authorName:"test2",
    password:"testpassword2",
    username:"test@2",
    email:"test2@gmail.com"
})
user1.save().then(()=>console.log("added"))