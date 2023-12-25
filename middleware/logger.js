const fs = require('fs')

const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString()
    const method = req.method
    const url = req.url
  
    console.log(timestamp)
    console.log(method)
    console.log(url)

    const logMessage = `${timestamp} || ${method} \| ${url}\n`

    fs.appendFile('logger.txt', logMessage, (err)=>{
        if(err){
            console.log(err)
        }
        next()
    })
  
   
  }
  
  module.exports = requestLogger;
  