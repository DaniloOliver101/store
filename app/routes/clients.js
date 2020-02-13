module.exports = function (application) {

    application.get('/clients', function (req, res) {
        application.app.controllers.clients.clients_list(application, req, res);
    });
    var id = 1;
    application.get('/client_detail/'+id, function (req, res) {
        application.app.controllers.clients.client_detail(application, id, req, res);
    });
};