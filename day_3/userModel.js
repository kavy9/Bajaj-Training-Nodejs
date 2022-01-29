const mongoose = require('mongoose')

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
module.exports = User
