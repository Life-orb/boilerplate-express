const { json } = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public")) ;
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) =>
    res.sendFile( __dirname + '/views/index.html')
  );


  app.use (function(req, res, next) {  
    console.log(req.method+" "+req.path+' - '+req.ip);
    next();
  }
  )

   function getCurrentTime() {return new Date().toString()};


app.get("/now", function(req, res, next) { req.time = getCurrentTime();
  next();
},
 function(req, res){
res.json({time: req.time})

 })

  app.get("/json", function(req, res) {


  if (process.env.MESSAGE_STYLE === "uppercase")
  {
    res.json({"message": "HELLO JSON"})

  } 
  else {
    res.json({"message": "Hello json"})

  }}
  )

function wordEcho(){return req.params.word

}

  app.get('/:word/echo', function(req, res){
req.echo = wordEcho
    
res.json ({echo: req.echo })

  }
  
  )

























 module.exports = app;





































 module.exports = app;
