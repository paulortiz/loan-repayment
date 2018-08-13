/** Imports */
const express = require("express");
const routes = require("./api/routers/Routes")
const compression = require("compression");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require('cors');


const app = express();
const port = 3000;

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use it before all route definitions
app.use(cors({origin: '*'}));

// Let's register the routes
routes(app);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port)

console.log('Listening on: ', port);
