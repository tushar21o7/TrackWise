const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct, 
    getProduct, 
    deleteProduct, 
    updateProduct,
} = require('../controllers/products');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;