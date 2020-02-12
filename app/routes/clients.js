module.exports = function (application) {

    application.get('/clients', function (req, res) {
        const dbConn = application.config.dbConn();
        var clientsModel = application.app.models.clientsModel;


        clientsModel.getClients(dbConn, function (err, result) {
            res.render("clients/clients", {clients: result});
        });
    });
};