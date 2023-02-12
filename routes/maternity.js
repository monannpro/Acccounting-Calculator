const express = require('express');
const path = require("path");
const maternityRouter = express.Router();

maternityRouter
    .get('/maternity', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/maternity.html'));
    });

module.exports = {
    maternityRouter,
};