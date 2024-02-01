const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
  //    console.log('In another middleware');
  res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
  console.log(req.path, req.body);
  res.redirect('/');
});

module.exports = router;