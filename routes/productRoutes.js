const express = require('express')

const routes = express.Router()

const productController = require('../controller/productController')

routes.get('/products', productController.getAllProducts)
routes.get('/products/:id', productController.getProduct)
routes.post('/products', productController.addProduct)
routes.put('/products', productController.editProduct)
routes.delete('/products/:id', productController.deleteProduct)

module.exports = routes