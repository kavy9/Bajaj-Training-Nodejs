const fs = require('fs')
const path = require('path')
const { parse } = require('path/posix')
// const sampleFilePath = path.join(__dirname,"data/sample")
// console.log(sampleFilePath)
// const data = fs.readFileSync("./data/sample",'utf-8')//or sampleFilePath 
// console.log(data)
// fs.writeFileSync("./data/newsample.txt","new content")

const html = fs.readFileSync("./data/index.html",'utf-8')
console.log(html)

console.log("<><><><><><><><><><><><><>")

const myJsonRaw = fs.readFileSync("./data/osspecs.json",'utf-8')
const myJson = JSON.parse(myJsonRaw)
console.log(myJson.uptime)
console.log(myJson.type)