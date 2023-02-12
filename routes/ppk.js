const express = require('express');
const ppkRouter = express.Router();

ppkRouter
    .get('/ppk', (req, res) => {
        res.send('ppk');
    });

module.exports = {
    ppkRouter,
};