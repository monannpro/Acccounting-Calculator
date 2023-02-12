const express = require('express');
const sickPayRouter = express.Router();

sickPayRouter
    .get('/sick-pay', (req, res) => {
        res.send('sick pay');
    });

module.exports = {
    sickPayRouter,
};