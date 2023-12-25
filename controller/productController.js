const productList = require('../utils/productList.js')

const getAllProducts = async (req,res) => {
    try {
        res.status(200).json({productList:productList})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error in allproducts controller ' })

    }
}

const getProduct = async(req,res) =>{
    try {
        const {id} = req.params

        const productId = parseInt(id, 10);

        console.log(id)
        let product
        for (const item of productList) {
            console.log(item)
            if (item.id === productId) {
                //console.log(item);
                product = item;
                break; // Exit the loop once the product is found
            }
        }
        console.log(product)
        res.status(200).json({product:product})
    } catch (error) {
        res.status(500).json({ message: 'eror in get a product controller' });

    }
}



const addProduct = async (req, res) => {
    try {
        const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body;

     
        const newProductId = products.length + 1

        const newProduct = {
            id: newProductId,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images,
        }

        products.push(newProduct)

        res.status(201).json({ product: newProduct })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ' error in add aproduct controller' })
    }
}



const editProduct = async (req, res) => {
    try {
        const { id} = req.params
        const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body

        const index = productList.findIndex(product => product.id == id)
        console.log(index)
        productList[index] = {
            id: parseInt(id),
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images,
        }

        res.status(200).json({  product: productList[productIndex] })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error in edit product controller' })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id} = req.params
        const index = productList.findIndex((p) => p.id == id)

        console.log(index)
        products.splice(index, 1)
        res.status(200).json({ message: 'product deleted ' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: ' error in delete product controller' })
    }
}

module.exports = {getAllProducts, getProduct, addProduct,editProduct, deleteProduct}