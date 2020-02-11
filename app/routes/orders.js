module.exports = function(app){
    app.get("/orders", function(req, res){
        res.render("orders/index");
    })
};