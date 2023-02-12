const express = require('express');
const leaveRouter = express.Router();

leaveRouter
    .get('/leave', (req, res) => {
        res.send('leave');
    });

module.exports = {
    leaveRouter,
};
