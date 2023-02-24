const express = require('express');

const startRouter = express.Router();

startRouter
    .get('/', (req, res) => {
        res.redirect('/home');
    });


module.exports = {
    startRouter,
};