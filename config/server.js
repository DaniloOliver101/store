const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('config/dbConn.js')
    .then('app/models')
    .then('app/controllers' +
        '')
    .into(app);

app.listen(3000, () => {
    console.log('server running in http://localhost:3000/');
});


module.exports = app;
