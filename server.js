const banco = require('./modulos/dados');

banco.init();

console.log(banco);

const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/bandas', function(req,res) {
    console.log("alguém acessou a rota /bandas ...");
    res.json(banco.dados.bandas);
});

app.get('/albuns', function(req,res) {
    console.log("alguém acessou a rota /albuns ...");
    res.json(banco.dados.albuns);
});

app.post('/banda', function(req,res) {
    console.log("alguém acessou a rota /bandas ...");
    console.log(req.body);
    banco.dados.bandas.push({ id: req.body.id, nome: req.body.nome });
    banco.save();
    res.json(banco.dados);
});

app.post('/album', function(req,res) {
    console.log("alguém acessou a rota /bandas ...");
    console.log(req.body);
    banco.dados.albuns.push({ id: req.body.id, nome: req.body.nome, banda: req.body.idBanda });
    banco.save();
    res.json(banco.dados);
});

app.listen(port, () => {
    console.log("Servidor inicializado na porta "+port);
})