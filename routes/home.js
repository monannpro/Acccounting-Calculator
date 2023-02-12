const express = require('express');
const homeRouter = express.Router();

homeRouter
    .get('/home', (req, res) => {
        res.send('home');
    });

module.exports = {
    homeRouter,
};

