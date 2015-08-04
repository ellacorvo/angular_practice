var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angulardemo');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));//this parses url encoded data
app.use(bodyParser.json()); //you need to use this for parsing json data

app.get('/', indexController.index);
app.get('/templates/:templateName', indexController.templates);

app.get('/api/animals', apiController.get);
app.post('/api/animals', apiController.create);
app.delete('/api/animals/:id', apiController.delete);

var server = app.listen(3657, function() {
	console.log('Express server listening on port ' + server.address().port);
});
