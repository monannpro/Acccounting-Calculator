const express = require('express');
const path = require("path");
const seniorityRouter = express.Router();

seniorityRouter
    .get('/seniority', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/seniority.html'));
    });

module.exports = {
    seniorityRouter,
};