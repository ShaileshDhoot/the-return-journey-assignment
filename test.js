const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./app')
const expect = chai.expect

chai.use(chaiHttp)

describe('Product API Tests', () => {
  describe('GET /products', () => {
    it('should return all products', (done) => {
      chai.request(app)
        .get('/products')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.productList).to.be.an('array')
          done()
        })
    })
  })

  describe('GET /products/:id', () => {
    it('should return a single product', (done) => {
      chai.request(app)
        .get('/products/1')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.product).to.be.an('object')
          done()
        })
    })
  })

  describe('POST /products', () => {
    it('should add a new product', (done) => {
      chai.request(app)
        .post('/products')
        .send({
          title: 'Test Product',
          description: 'This is a test product',
          price: 99.99,
          discountPercentage: 10,
          rating: 4.5,
          stock: 50,
          brand: 'TestBrand',
          category: 'TestCategory',
          thumbnail: 'https://example.com/test-thumbnail.jpg',
          images: ['https://example.com/test-image1.jpg', 'https://example.com/test-image2.jpg']
        })
        .end((err, res) => {
          expect(res).to.have.status(201)
          expect(res.body.product).to.be.an('object')
          done()
        })
    })
  })

  describe('PUT /products/:id', () => {
    it('should edit an existing product', (done) => {
      chai.request(app)
        .put('/products/1')
        .send({
          title: 'Updated Test Product'
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.product).to.be.an('object')
          expect(res.body.product.title).to.equal('Updated  product')
          done()
        })
    })
  })

  describe('DELETE /products/:id', () => {
    it('should delete an existing product', (done) => {
      chai.request(app)
        .delete('/products/1') 
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.message).to.equal('product deleted')
          done()
        })
    })
  })
})
