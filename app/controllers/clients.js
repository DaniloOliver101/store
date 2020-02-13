module.exports.clients_list = function (application, req, res) {
    const dbConn = application.config.dbConn();
    let clientsDAO = new application.app.models.ClientsDAO(dbConn);


    clientsDAO.getClients(function (err, result) {
        res.render("clients/clients", {clients: result});
    });
};

module.exports.client_detail = function (application, id, req, res) {
    const dbConn = application.config.dbConn();
    var clientsDAO = new application.app.models.ClientsDAO(dbConn);
    clientsDAO.getClientDetail(id, function (err, result) {
        res.render("clients/client_detail", {clients: result});
    });
};