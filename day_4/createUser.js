const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://kavy9:MongoPass@cluster0.eol57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})
const User = mongoose.model("Users",{
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:[true,"enter your mobile numebr"]
    },
    country:{
        type:String,
        default:"IND"
    },
    area:String,
    pincode:{
        type:Number
    },
    address:String
})
module.exports = User
