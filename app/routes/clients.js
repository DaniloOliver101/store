module.exports = function (application) {

    application.get('/clients', function (req, res) {
        const dbConn = application.config.dbConn();
        var clientsDAO = new application.app.models.ClientsDAO(dbConn);


        clientsDAO.getClients( function (err, result) {
            res.render("clients/clients", {clients: result});
        });
    });
};