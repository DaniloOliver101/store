module.exports = function (application) {
    let id = 1;
    application.get('/add_client/', function (req, res) {
        application.app.controllers.admin.form_add_client(application, req, res);
    });
    application.post('/clients/save', function (req, res) {
        application.app.controllers.admin.save_client(application, req, res);
    });



};
