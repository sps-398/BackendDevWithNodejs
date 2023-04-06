const express = require('express');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="post"><input type="text" name="title" placeholder="Enter title"/><input type="number" name="size" placeholder="Enter size"/><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;