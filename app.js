var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello WorlD!');
});

app.get('/m/:variable/:variable2', function(req,res){
    var variable = req.params.variable;
    var variable2 = req.params.variable2;
    console.log("This was called!");
    res.send(variable + ' ' + variable2);
});

app.listen(3000, '', function(){
    console.log("App has started");
});