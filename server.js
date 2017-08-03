var express = require('express');
var bodyParser = require('bodyParser');
var path = require('path');

var app = express();
var PORT = process.env.PORT | | 3000; // set as an initial port

/makes static assets in the public folder available 

app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app)


app.listen(process.env.PORT | | 3000, function(){
	console.log("Server is listening!")
});
