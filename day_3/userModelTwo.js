const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://kavy9:MongoPass@cluster0.eol57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})
const mobileschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },
    company :{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    features:{
        type:[String],
        required:true
    }
})
const MobileModel = mongoose.model("Mobile",mobileschema)

module.exports = MobileModel