const fs = require('fs')
const readLine = require('readline')

const file = readLine.Interface({
    input:fs.createReadStream('./data/sample',{encoding:'utf-8'})
    //output:process.stdout,
    //terminal:false     these two params are not necesary but are recommended 

});
let linecount=1;
file.on('line',(line)=>{

    console.log(line+` ${linecount++}`);
});