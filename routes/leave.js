const express = require('express');
const path = require("path");
const leaveRouter = express.Router();

leaveRouter
    .get('/leave', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/leave.html'));
    });

module.exports = {
    leaveRouter,
};
