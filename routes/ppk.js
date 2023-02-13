const express = require('express');
const path = require("path");
const ppkRouter = express.Router();

ppkRouter
    .get('/ppk', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/ppk.html'));
    });

module.exports = {
    ppkRouter,
};