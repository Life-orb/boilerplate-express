const { json } = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public")) ;
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) =>
    res.sendFile( __dirname + '/views/index.html')
  );


  app.use (function(req, res, next) {
    var a = req.path;
    var b =  req.ip;
    var c = req.method;
    '/', 
    console.log(c+" "+a+' - '+b);
    next();
  }
  )


  app.get("/json", function(req, res) {


  if (process.env.MESSAGE_STYLE === "uppercase")
  {
    res.json({"message": "HELLO JSON"})

  } 
  else {
    res.json({"message": "Hello json"})

  }}
  )



























 module.exports = app;





































 module.exports = app;
