const http=require("http");
//const { type } = require("os")
const url=require("url");

//http.createServer((req,res)=>{
//    res.write("hello world");
//    res.end();
//}).listen(3000);




// const app=http.createServer((req,res)=>{
// const querydata=url.parse(req.url,true)
// console.log(querydata.query)
// const search=querydata.query.search
// const price=querydata.query.price
// res.writeHead(200,{"Content-Type":"text/html"})
// if(search==="redmi"&&Number(price)===12000){
//     res.write("<h2> Redmi not pro </h2>")
//     res.end()
// }
// });

// app.listen(3000,()=>console.log("Server started in port : 3000"))

//example 2 

http.createServer((req,res)=>{
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(queryObject.fruit+' '+queryObject.vegetable);
    res.end()
}).listen(3000,()=>console.log('runnign server on 3000'));
//demo url 
//http://localhost:8080/app.js?foo=bad&baz=foo 