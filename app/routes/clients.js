var mysql = require('mysql');
var db = require('../../config/db');
const conn = mysql.createConnection({
    host: db.hostname,
    user: db.username,
    password: db.password,
    database: db.db_name
});
conn.query("select * from clients", function(error, result){

});

module.exports = function(app){
    app.get("/clients", function(req, res){
        res.render("clients/clients");
    });
};