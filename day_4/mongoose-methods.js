const User = require("./createUser");
const bcrypt = require('bcrypt')

async function run(){
    const password = "testpassword"
    const encryptPass = await bcrypt.hash(password,7)
    const users = await User.where('username').equals('test@11')
    //console.log(await bcrypt.compare('testpassword',users[0].password))
    //console.log(users[0].password)
    console.log(users[0])
}
run().then(()=>console.log("----")).catch((err)=>console.log("error"))

//User.find() returns result as arrays 
//user.findOne() returs just one element that is object that matched
//User.updateOne({field:value})
//User.deleteOne(query)  deletes the first element it matches 
//User.where({})