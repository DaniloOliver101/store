function ClientsDAO(conn) {
    this._conn = conn;
    ClientsDAO.prototype.getClients = function (callback) {
        console.log('fazendo query!');
        this._conn.query('select * from client', callback);

    };
    ClientsDAO.prototype.getClientDetail = function (id, callback) {
        this._conn.query("select * from client where id = " + id, callback);
    };
    ClientsDAO.prototype.saveClient = function (data, callback) {
        this._conn.query("insert into client set ? ", data, callback)

    };
}

module.exports = function () {
    return ClientsDAO;
};