const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Inside first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Inside second middleware");
    res.send('<h1>Welcome to Express</h1>');
});

app.listen(3000);