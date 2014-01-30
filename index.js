/* global require, process, console */
var request = require('request'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

// 
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//
app.get("/", function Root(req, res) {
    res.send("Requested service is invalid!");
});

//
app.get("/ping", function Ping(req, res) {
    res.json({ "status": "ok"});
});


// list bus
app.get("/list/bus", function ListBus(req, res) {
    
    request("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o", function (error, response, body) {
        var parsedValue = JSON.parse(body);
        res.json(parsedValue);
    });
    
});


// listening on port ????
app.listen(port, function Listen() {
    console.log("Listening on ", port);
});