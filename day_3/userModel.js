const mongoose = require('mongoose')
//mongodb+srv://kavy9:<password>@cluster0.eol57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 
//const uri = "mongodb+srv://kavy9:Bittu@009@cluster0.eol57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect("mongodb+srv://kavy9:MongoPass@cluster0.eol57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})
const User = mongoose.model("publications",{
    authorName:{
        type:String,
        required:[true,"please enter the email"],
        minlength:3
    },
    password:String,
    username:String,
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:5,
        maxlength:15
    },
    genre:{
        type:[String]//it is a field of array
    }
})

const user1 = new User({
    authorName:"test",
    password:"testpassword",
    username:"test@1",
    email:"test"
})
user1.save().then(()=>console.log("added"))