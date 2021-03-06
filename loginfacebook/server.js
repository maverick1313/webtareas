function route(app, regex, prefix) {
 app.get(regex, function (req, res) {
 var type = req.params[0];
 var path = req.params[1];
 var file = prefix + type + '/' + path
 res.sendfile(file);
 });
}

var express=require('express');
var PORT=8081;

var app=express();
app.get('/', function(req, res){
	res.sendfile('loginFacebook.html');
});

app.get('/carrito', function(req, res) {
 res.sendfile('shoppingcar.html');
});
app.get('/home', function(req, res) {
 res.sendfile('maps.html');
});

route(app, /^\/(assets|dist|img)\/(.*)/, './');

app.listen(PORT);
console.log('Running on port ' + PORT);
