
var bands = require("../data/bands.js");

module.exports = function(app) {

    app.get("/api/bands", function (req,res){
        res.json(bands);
    })
}