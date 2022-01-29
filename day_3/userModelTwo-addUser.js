const mongoose = require('mongoose')
const MobileModel = require('./userModelTwo')

const newMobile = new MobileModel({
    name:"iphone13",
    company:"Apple",
    price:69999,
    features:["12MP camera","4050mAh","120hz"],
    otherfeature:"None"
})
newMobile.save().then(()=>console.log("new mobile added to server"))