const express = require('express');
const app = express();
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set("view engine","hbs")


app.get('/home',(req,res)=>{
    res.status(200).render("homeless",{username:"peter" , id:120})
})
app.listen(3001,()=>{console.log("hosting on 3001")})