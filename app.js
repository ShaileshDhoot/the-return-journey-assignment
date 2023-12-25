const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const loggingMiddleware = require('./middleware/logger')
const productRoutes = require('./routes/productRoutes')
app.use(loggingMiddleware)
app.use('/api', productRoutes)

server.listen(3000, () => {
    console.log('server connected to port 3000')
})
