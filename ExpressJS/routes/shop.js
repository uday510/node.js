const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
  // res.status(200).send('Home Page');
  res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;

// /Users/uday/Desktop/NodeJS/ExpressJS/routes/views/shop.html'