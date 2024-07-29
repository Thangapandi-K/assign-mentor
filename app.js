// import express
const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/studentRoutes');

//create express app

const app = express();

//express middleware

app.use(express.json());

//router connection
app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);

//export
module.exports = app;
