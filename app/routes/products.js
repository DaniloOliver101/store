module.exports = function(app){
    app.get("/products", function(req, res){
        res.render("products/index");
    })
};