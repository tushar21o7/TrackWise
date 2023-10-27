const {StatusCodes} = require('http-status-codes');
const UnauthenticatedError = require('../errors');
const Product = require('../models/Product');
const cache = require('./cache');

const getAllProducts = async (req,res) => {
    const products = await Product.find({createdBy: req.user.userId});
    if(!products) {
        res.status(StatusCodes.OK).render('userProducts.ejs', {msg:"Your cart is empty", isLoggedIn:1});
    } 
    res
     .status(StatusCodes.OK)
     .render('userProducts.ejs', {products:products, isLoggedIn:1});
}

const createProduct = async (req,res) => {
    const {productId, query} = req.body; 
    console.log(query);
    const item = cache.get(query).get(productId);
    delete item.q;
    item.createdBy = req.user.userId;
    const product = await Product.create(item);
    res.status(StatusCodes.CREATED).send();
}

const getProduct = async (req,res) => {
    const {
      user:{userId}, 
      params:{id:productId}
    } = req;

    const product = await Product.findOne({
        id: productId,
        createdBy: userId,
    });

    if(product == null) {
        return res.status(StatusCodes.OK).redirect('/api/v1/products');
    }

    res
     .status(StatusCodes.OK)
     .render('product.ejs', {product:product, isLoggedIn:1});
}

const deleteProduct = async (req,res) => {
    const {
      user:{userId},
      params:{id:productId},
    } = req;

    const product = await Product.deleteOne({
        createdBy: userId,
        id: productId,
    })
    
    res.status(StatusCodes.OK).send();
}

const updateProduct = (req,res) => {
    res.send('update product');
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
}