const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('config/dbConn.js')
    .then('app/models')
    .into(app);

app.listen(3000, () => {
    console.log('server running in http://localhost:3000/');
});


module.exports = app;
