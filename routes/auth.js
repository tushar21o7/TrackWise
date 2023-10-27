const express = require('express');
const router = express.Router();

const { register, login, logout } = require('../controllers/auth');

router.route('/register').post(register).get((req,res)=>{res.render('register.ejs')});
router.route('/login').post(login).get((req,res)=>{res.render('login.ejs')});
router.route('/logout').post(logout);

module.exports = router;