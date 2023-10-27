const cheerio = require('cheerio');
const request = require('request');
const cache = require('./cache');

const getAllProducts = async (req,res) => {
    const query = req.query.product;
    if(query === undefined) {
        return res.send('Bad Request');
    }
    
    if(cache.get(query)) {
        return res
          .status(200)
          .render('products.ejs', {products: cache.get(query), isLoggedIn: (req.session.user!==undefined)});
    }
     
    const url = `https://www.flipkart.com/search?q=${query}`;
    request(url,cb);
    async function cb(err,res,html) {
        if(err) {
            console.log(err);
        } else {
            getHtml(html);
        }
    }

    const class1 = {
        selTool: '._2kHMtA',
        name: '._4rR01T',
        url: '._1fQZEK',
        image: '._396cs4',
        price: '._30jeq3',
    };
    
    const class2 = {
        selTool: '._4ddWXP',
        name: '.s1Q9rs',
        url:  '._2rpwqI',
        image: '._396cs4',
        price: '._30jeq3',
    };
    
    const class3 = {
        selTool: '._1xHGtK._373qXS',
        name: '.IRpwTa',
        url:  '._2UzuFa',
        image: '._2r_T1I',
        price: '._30jeq3',
    };

    async function getHtml(html) {
        let $ = await cheerio.load(html);

        const classes = ($(class1.selTool)).length!=0 ? class1 : (($(class2.selTool)).length!=0 ? class2 : class3);
        
        const links = $(classes.url).get().map(x => $(x).attr('href'));
        const images = $(classes.image).get().map(x => $(x).attr('src'));
        const IDs = $(classes.selTool).parent().get().map(x => $(x).attr('data-id'));

        const selTool = $(classes.selTool); 

        let products = new Map();
        
        for(let i=0; i< selTool.length; i++) {
            let product = {q: query};
            product.name = $(selTool[i]).find(classes.name).text();
            product.url = "https://www.flipkart.com" + links[i];
            product.image = images[i];
            product.price = $(selTool[i]).find(classes.price).text();
            products.set(IDs[i], product);
        }
        
        cache.set(query, products);
        res
         .status(200)
         .render('products.ejs', {products: products, isLoggedIn: (req.session.user!==undefined)});
    }
}

const getSingleProduct = (req,res) => {
    const {q,id} = req.params;
    const product = cache.get(q).get(id);
    product.id = id;

    if(req.session.user) {
        isLoggedIn = 1;
    } else {
        isLoggedIn = 0;
    }
    res
     .status(200)
     .render('product.ejs', {product:product, isLoggedIn: (req.session.user!==undefined)});
}

module.exports = {getSingleProduct, getAllProducts};