const express = require('express');
const maternityRouter = express.Router();

maternityRouter
    .get('/maternity', (req, res) => {
        res.send('maternity');
    });

module.exports = {
    maternityRouter,
};