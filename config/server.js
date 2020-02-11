var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.listen(3000, () => {
    console.log('server running in http://localhost:3000/');
});


module.exports = app;
