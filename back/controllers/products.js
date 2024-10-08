const Product = require("../models/Product");
const { v4: uuidv4 } = require('uuid');

exports.getAllProducts = (req, res, next) => {
    Product.find()
    .then(
        (products) => {
          const mappedProducts = products.map((product) => {
            product.imageUrl = 'http://localhost:3000/images/' + product.imageUrl;
            return product;
          });
          res.status(200).json(mappedProducts);
        })
        .catch(error => res.status(500).json({ error }));
}

exports.getOneProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            product.imageUrl = `http://localhost:3000/images/${product.imageUrl}`;
            res.status(200).json(product);
        })
        .catch(error => res.status(404).json({ message: error }));
}

exports.orderProducts = (req, res) => {
    if(!req.body.contact || 
        !req.body.contact.firstName || 
        !req.body.contact.lastName || 
        !req.body.contact.address || 
        !req.body.contact.city || 
        !req.body.contact.email || 
        !req.body.products) {
        return res.status(400).send(new Error("Bad request!"));
        }
    let queries = [];
    for(let productId of req.body.products) {
        const queryPromise = new Promise((resolve, reject) => {
            Product.findById(productId)
            .then(product => {
                if(!product) { reject(`Product not found : ${productId}`); }
                product.imageUrl = `http://localhost:3000/images/${product.imageUrl}`;
                resolve(product);
            })
            .catch(error => { reject("Database error !"); })
        });
        queries.push(queryPromise);
    }
    Promise.all(queries)
        .then(products => {
            const orderId = uuidv4();
            return res.status(201).json({
                contact: req.body.contact,
                products: products,
                orderId: orderId
            })
        })
        .catch(error => res.status(500).json(new Error(error)));
}