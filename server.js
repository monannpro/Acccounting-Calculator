const express = require('express');
const {homeRouter} = require("./routes/home");
const {startRouter} = require("./routes/start");
const {leaveRouter} = require("./routes/leave");
const {seniorityRouter} = require("./routes/seniority");
const {ppkRouter} = require("./routes/ppk");
const {maternityRouter} = require("./routes/maternity");
const {sickPayRouter} = require("./routes/sick-pay");

const app = express();

app.use(express.static('public'));
app.use('/', homeRouter);
app.use('/', startRouter);
app.use('/calculator', leaveRouter);
app.use('/calculator', seniorityRouter);
app.use('/calculator', ppkRouter);
app.use('/calculator', maternityRouter);
app.use('/calculator', sickPayRouter);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});