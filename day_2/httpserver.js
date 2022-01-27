const http = require('http')
const fs= require('fs')
const url = require('url')

http.createServer((req,res)=>{
    const query = url.parse(req.url,true).query;
    fs.writeFileSync('./data/httpserverlogs.json',JSON.stringify(query)) ;
    console.log(query)
    res.write("hellow");
    res.end();
}).listen(3000,()=>console.log("started on port 3000"))