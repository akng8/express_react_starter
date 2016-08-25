var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.get('/' , function(req , res) {
	res.send('<h1> hello WORLD </h1>');
});
app.listen(3000 , function() {
	console.log('Listening on port 3000');
});
