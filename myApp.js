var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public")) ;
app.use("/public")
app.get("/", function(req, res) {
    res.sendFile( __dirname + '/views/index.html');
  });

































 module.exports = app;





































 module.exports = app;
