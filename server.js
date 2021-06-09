const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv/config');

const EmployeeRoute = require('./routes/employee');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const app = express();

app.use('api/employee', EmployeeRoute)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT = process.env.PORT ?? 3000;
app.listen(PORT)

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('디비 연결');
});