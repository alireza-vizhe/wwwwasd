const express = require("express");

const userController = require('../controller/userController');

const router = express.Router();

router.get("/products", userController.getProducts);
router.post("/create-product", userController.createProduct);
router.post('/edit-product', userController.editProduct);
router.post("/delete-product", userController.deleteProduct);

module.exports = router;