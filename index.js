var express = require("express");
var app = express();
var d3 = require('d3');

app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
app.use('/bs', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jq', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/d3', express.static(__dirname + '/node_modules/d3/build'));

app.listen(7890, function(){
	console.log('listening on *:7890');
});

//Hopefully we can add the captive portal page here
app.get('/', function(req, res){
	//res.render('map.html');
	res.render('map.jade');
});
