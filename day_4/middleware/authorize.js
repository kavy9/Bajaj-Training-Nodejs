//jayasruthi.l@gmail.com 
const jwt = require("jsonwebtoken")
const User = require("../createUser")
async function authorize(req,res,next){
    try{
        const authheader=req.headers["authorization"]
        console.log(authheader)
        const user = await User.findOne({username:"test@11"})
        next()
    }
    catch(err){
        res.send("err in authorization")
    }
}