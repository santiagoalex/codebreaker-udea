var  express = require ('express');
var codeBreaker = require('./code-breaker');
var app = express();

app.get('/setsecret/:secret', function (req, res){
    number = req.params.secret;
    codeBreaker.setSecret(number);   
    res.send({message: 'ok , lets start bitches'});
});

app.get('/guess/:number', function (req, res){
    number = req.params.number;
    res.send({result: codeBreaker.codeBreaker(number)});    
});


module.exports= app;