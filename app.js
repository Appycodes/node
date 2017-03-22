var express = require('express')
var path = require('path');
var app = express();


app.use('/bij', express.static(path.join(__dirname, 'public')));













app.listen(80, function(err){
	if(!err){
		console.log('Server connected');
	}
})