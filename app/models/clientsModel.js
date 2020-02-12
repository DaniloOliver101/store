module.exports = function () {
    this.getClients = function (conn, callback) {
        console.log('fazendo query!');
        conn.query('select * from client', callback);

    };
    this.getClientDetail = function(conn, id, callback){
        conn.query("select * from client where id = "+ id, callback);
    };
    this.saveClient = function(conn, data, callback){
        conn.query("insert into client set ? ", data, callback)

    };
    return this;

};