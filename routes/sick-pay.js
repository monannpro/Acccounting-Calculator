const express = require('express');
const path = require("path");
const sickPayRouter = express.Router();

sickPayRouter
    .get('/sick-pay', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/sick-pay.html'));
    });

module.exports = {
    sickPayRouter,
};