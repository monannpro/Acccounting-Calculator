const express = require('express');
const seniorityRouter = express.Router();

seniorityRouter
    .get('/seniority', (req, res) => {
        res.send('seniority');
    });

module.exports = {
    seniorityRouter,
};