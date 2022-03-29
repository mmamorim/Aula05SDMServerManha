
let utils = require('./modulos/utils')
//console.log(utils);

const dados = require('./modulos/dados');

const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

let bandas = require("./modulos/dados")
//console.log(bandas);

app.get('/', (req, res) => {
  res.send('Alguém acessou a rota / beleza?')
})

app.get('/bandas', function(req,res) {
    console.log("alguém acessou a rota /bandas ...");
    res.json(bandas);
});

app.post('/banda', function(req,res) {
    console.log("alguém acessou a rota /bandas ...");
    console.log(req.body);
    bandas.push({ id: req.body.id, nome: req.body.nome });
    res.json(bandas);
});


app.listen(port, () => {
    console.log("Servidor inicializado na porta "+port);
})