module.exports.form_add_client = function (application, req, res) {
    res.render('clients/form_add_client', {validation: {}, client: {}});
};

module.exports.save_client = function (application, req, res) {
    const dbConn = application.config.dbConn();
    const clientsDAO = new application.app.models.ClientsDAO(dbConn);
    let client = req.body;
    req.assert('name', 'Nome deve ser preenchido').notEmpty();
    req.assert('uf', 'UF deve ser preenchido').notEmpty();
    req.assert('email', 'Email deve ser preenchido').notEmpty();
    req.assert('phone', 'Telefone deve ser preenchido').notEmpty();
    req.assert('phone', 'Telefone incorreto').len(11, 11);

    let errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        res.render("clients/form_add_client", {validation: errors, client: client});
        return;
    }

    clientsDAO.saveClient(client, function (error, result) {
        res.redirect('/clients');
    });
};