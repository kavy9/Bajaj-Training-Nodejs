//const buff = new Buffer("data") or
const buff = new Buffer.alloc(50)
buff.write("buffer data")//write 
console.log(buff.toString())   //read

//buffer copy 
var buffer1 = new Buffer.alloc(10);
buffer1.write("ABCEFGHIJKLMNOP")
var buffer2 = Buffer.alloc(10);
//buffer2.copy(buffer1)
console.log(buffer1.toString())
console.log(buffer2.toString())

// buffer copy
// slice
// convert to json format
const json = ["one","two"]

var buffer3= new Buffer.from([1,2],'utf-8')
console.log(buffer3.toJSON())
