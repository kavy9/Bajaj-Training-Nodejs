const fs=require('fs')
const path = require('path')
const os = require('os')

var osObject = {
    uptime : os.uptime(),
    type : os.type(),
    release:os.release(),
    totalmem : os.totalmem(),
    freemem:os.freemem(),
}
fs.writeFileSync("./data/osspecs.json",JSON.stringify(osObject))