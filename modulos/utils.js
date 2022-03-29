
module.exports = {

    nome: "Ana",
    idade: 20,

    ehPrimo: function(valor) {
        for(let i=2; i<valor/2; i++) {
            if(valor % i == 0) {
                return false;
            }
        }
        return true;
    }
    
};