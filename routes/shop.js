const express = require('express');
const rootDir = require('../util/path');
const path = require('path');
const router = express.Router();


router.get('/', (req, res, next) => {
    // console.log('In middleware!');
    // res.send('<h4>Hello from Express!</h4>'); // Sends a response

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

})


module.exports = router;