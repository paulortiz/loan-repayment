/** Imports */
var express = require("express");
var routes = require("./api/routers/Routes")
var compression = require("compression");
var bodyParser = require("body-parser");
var helmet = require("helmet");

var app = express();
var port = 3000;

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Let's register the routes
routes(app);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port)

console.log('Listening on: ', port);
