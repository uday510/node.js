const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); // Filters the path
app.use(shopRoutes);


app.use((req, res, next) => { 
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(4000); // Starts a server on port 4000

