var express = require('express');
var PORT = 8081;
var app = express();
app.get('/', function(req, res)
{
        res.sendfile('maps2.html');
}
);
app.listen(PORT);
console.log('Running on port ' + PORT);