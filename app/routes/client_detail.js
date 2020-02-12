module.exports = function (application) {
    let id = 1;
    application.get('/client_detail/', function (req, res) {
        const dbConn = application.config.dbConn();
        var clientsModel = application.app.models.clientsModel;


        clientsModel.getClientDetail(dbConn,id, function (err, result) {
            res.render("clients/client_detail", {clients: result});
        });
    });
};