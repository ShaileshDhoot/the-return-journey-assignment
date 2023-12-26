1. getAllProducts
Description:
Retrieves a list of all products.

Endpoint:

GET /products

Responses:

200 OK: Returns a JSON object containing the product list.

500 Internal Server Error: Indicates an error occurred on the server.


2. getProduct
Description:
Retrieves a specific product by ID.

Endpoint:

GET /products/:id
Parameters:

id (Path Parameter): ID of the product to retrieve.
Responses:

200 OK: Returns a JSON object containing the requested product.

500 Internal Server Error: Indicates an error occurred on the server.


3. addProduct
Description:
Adds a new product to the product list.

Endpoint:

POST /products
Parameters:

Request Body (JSON):

{
  "title": "Product Title",
  "description": "Product Description",
  "price": 19.99,
  "discountPercentage": 10,
  "rating": 4.5,
  "stock": 100,
  "brand": "Brand Name",
  "category": "Category Name",
  "thumbnail": "URL to Thumbnail Image",
  "images": ["URL to Image 1", "URL to Image 2", ...]
}
Responses:

201 Created: Returns a JSON object containing the newly added product.

500 Internal Server Error: Indicates an error occurred on the server.


4. editProduct
5. 
Description:
Edits an existing product based on its ID.

Endpoint:

PUT /products/:id
Parameters:

id (Path Parameter): ID of the product to edit.
Request Body (JSON):

{
  "title": "Updated Product Title",
  "description": "Updated Product Description",
  "price": 29.99,
  "discountPercentage": 15,
  "rating": 4.8,
  "stock": 150,
  "brand": "Updated Brand Name",
  "category": "Updated Category Name",
  "thumbnail": "URL to Updated Thumbnail Image",
  "images": ["URL to Updated Image 1", "URL to Updated Image 2", ...]
}
Responses:

200 OK: Returns a JSON object containing the updated product.
json
Copy code

500 Internal Server Error: Indicates an error occurred on the server.


5. deleteProduct
Description:
Deletes a product based on its ID.

Endpoint:

DELETE /products/:id
Parameters:

id (Path Parameter): ID of the product to delete.
Responses:

200 OK: Returns a JSON object with a message indicating the successful deletion.

{
  "message": "Product deleted"
}
500 Internal Server Error: Indicates an error occurred on the server.
