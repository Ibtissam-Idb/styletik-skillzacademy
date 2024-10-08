// Import
const express = require('express');
const router = express.Router();

const productsCtrl = require("../controllers/products");

// Routes
router.get("/", productsCtrl.getAllProducts);
router.get("/:id", productsCtrl.getOneProduct);
router.post("/order", productsCtrl.orderProducts);

module.exports = router;