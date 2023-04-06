const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title" placeholder="Enter title"/><input type="number" name="size" placeholder="Enter size"/><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Express</h1>');
});

app.listen(3000);