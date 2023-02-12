const express = require('express');
const path = require('path');
const homeRouter = express.Router();

homeRouter
    .get('/home', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/home.html'));
    });

module.exports = {
    homeRouter,
};

