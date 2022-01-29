//Reader pointer
//WriterPointer 
const fs =require('fs')
var readableStream = fs.createReadStream('./data/sample',{encoding:'utf-8'});

readableStream.on('end',()=>{// this event is fired when there is no more data to read 
    console.log("ending the stream")
})
readableStream.on('data',(datachunck)=>{
    console.log(datachunck)
})
//more events 
//finish 
//error
var writableStream = fs.createWriteStream('./data/newsample.txt',{encoding:'utf-8'});

readableStream.pipe(writableStream)

// writableStream.write("new data",'utf-8');
// writableStream.on("finish",()=>{
//     console.log("finished")
// })
