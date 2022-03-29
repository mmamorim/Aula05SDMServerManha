const fs = require("fs");

module.exports = {
    dados: {},

    init: function () {
        let self = this;
        fs.readFile("./modulos/banco.json", 'utf-8', function (err, data) {
            if (err) {
                console.log("Deu pane!!!!", err);
            } else {
                //console.log("dados: ",data);
                self.dados = JSON.parse(data);
                console.log(self.dados);
            }
        })
    },

    save: function () {
        fs.writeFile("./modulos/banco.json", JSON.stringify(this.dados), function (err) {
            if (err) {
                console.log("Deu pane!!!!", err);
            } else {
                console.log("Dados armazenados com sucesso!");
            }
        })
    }
}