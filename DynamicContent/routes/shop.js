const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    docTitle: 'Shop', 
    path: '/', // This is to add the active class to the shop link in the header.ejs file
    hasProducts: products.length > 0, // This is to add the active class to the shop link in the header.ejs file
    activeShop: true, // This is to add the active class to the shop link in the header.ejs file
    productCSS: true // This is to add the product.css file to the shop.ejs file
  });
});

module.exports = router;
