var  express = require ('express');
var codeBreaker = require('./code-breaker');
var app = express();

app.get('/setsecret/:secret', function (req, res){
    number = req.params.secret;
    codeBreaker.setSecret(number);   
    res.send({message: 'ok , let the game begin'});
});

app.get('/guess/:number', function (req, res){
    number = req.params.number;
    res.send({result: codeBreaker.codeBreaker(number)});    
});

app.get('delete', function (req, res){
    res.send({message: 'ja borre'}); 
});

app.get('upgrade', function (req, res){
    res.send({message: 'ja actualise'});
});



module.exports= app;