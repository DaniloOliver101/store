var mysql = require('mysql');


let dbConn = function () {
    return mysql.createConnection({
        host: "eletronic-store.mysql.uhserver.com",
        user: "app_user2",
        password: "@3CC3MK8YvB",
        database: "eletronic_store"
    });
};

module.exports = function(){
    return dbConn;
}