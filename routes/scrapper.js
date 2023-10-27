const express = require('express');
const router = express.Router();

const {getSingleProduct, getAllProducts} = require('../controllers/scrapper');
const trackProduct = require('../controllers/track');

router.route('/').get(getAllProducts);
router.route('/:q/:id').get(getSingleProduct).post(trackProduct); 

module.exports = router;