//1.write the os specs to a file using sync and async 
// os module path modules fs module 
//2.write different types of data to file and read it 
//3.write program to merge two files with sync write 

//method with os and path 
// const os = require('os')
// console.log(os.uptime())
// console.log(os.type())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.freemem())


// console.log(__dirname)
// console.log(__filename)

const path = require('path')
const filepath = path.join("./data","anotherfile.js");
console.log(filepath)
const abspath = path.resolve(__dirname,"data","file.js")
console.log(abspath)