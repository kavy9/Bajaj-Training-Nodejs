const { fstat } = require('fs')
const yargs = require('yargs')
const fs = require('fs')
const path = require('path')
const argv = yargs.argv
//console.log(argv._)

if(argv._[0]=="add"){
    console.log("yessse")
    const myJsonRaw = fs.readFile('./data/todo.json','utf-8',(err,jsonString)=>{
        if(err){
            console.log("file reading failed ");
            return;
        }
        const myJsonArry= JSON.parse(jsonString)
        const newObj = {
            title:argv._[1],
            deadline:argv._[2]
        }
        let duplicate = false;
        myJsonArry.forEach(element => {
            if(element.title==newObj.title){
                duplicate=true;
            }
        });
        if(!duplicate){myJsonArry.push(newObj)
        fs.writeFile('./data/todo.json',JSON.stringify(myJsonArry),(err)=>{
            if(err)console.log("error while inserting new object")
        })}
        else{
            console.log("already exists")
        }
    });
    
}
else if(argv._[0]=="view"){
    fs.readFile('./data/todo.json','utf-8',(err,jsonString)=>{
        if(err) {console.log("error while reading the file");return;}
        const myJsonArry= JSON.parse(jsonString)
        myJsonArry.forEach((i)=>{
            console.log(i);
        })

    })
}
//