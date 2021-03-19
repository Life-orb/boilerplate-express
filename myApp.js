const { json } = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public")) ;
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) =>
    res.sendFile( __dirname + '/views/index.html')
  );


  app.get("/json", function(req, res) {


  if (process.env.MESSAGE_STYLE === uppercase)
  {
    res.json({"message": "HELLO JSON"})

  } 
  else {
    res.json({"message": "Hello json"})

  }}
  )



























 module.exports = app;





































 module.exports = app;
