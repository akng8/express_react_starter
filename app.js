var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.get('/' , function(req , res) {
	console.log('Hello World');
});
app.listen(3000 , function() {
	console.log('Listening on port 3000');
});
