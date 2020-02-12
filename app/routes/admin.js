module.exports = function (application) {
    let id = 1;
    application.get('/add_client/', function (req, res) {
        res.render('clients/form_add_client');
    });
    application.post('/clients/save', function (req, res) {
        const dbConn = application.config.dbConn();
        const clientsModel = application.app.models.clientsModel;
        let client = req.body;
        clientsModel.saveClient(dbConn, client, function(error, result){
            res.redirect('/clients');
        });
        // res.send(client);

    })
};