"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas, velocidade) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.modeloCarro = function () {
        return this.modelo;
    };
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, carros) {
        this.endereco = endereco;
        this.listaDeCarros = carros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostraEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.listaCarros = function (carros) {
        this.listaDeCarros = carros;
    };
    Concessionaria.prototype.mostraListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carroQueTem) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carroQueTem = carroQueTem;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido.modeloCarro();
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carroQueTem.modeloCarro();
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carroQueTem = carro;
    };
    return Pessoa;
}());
/**Concessionaria*/
var carroA = new Carro('Gol', 4, 200);
var carroB = new Carro('Bmw', 4, 560);
var carroC = new Carro('Amarok', 4, 350);
var listaDeCarros = [];
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);
var concessionaria = new Concessionaria('Rua do Norte', listaDeCarros);
console.log("Endereco: " + concessionaria.mostraEndereco());
var carros = concessionaria.mostraListaDeCarros();
carros.forEach(function (carro) {
    console.log("Carro: " + carro.modeloCarro());
});
// for (const carro of carros) {
//     console.log(`Carro: ${carro.modeloCarro()}`);
// }
/** Cliente*/
console.log('\n');
var nome = 'Wenner';
var cliente = new Pessoa(nome, carroB, carroC);
console.log("Carro que comprou: " + cliente.dizerCarroQueTem());
concessionaria.mostraListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log("Cliente: " + cliente.dizerNome());
console.log("Carro preferido: " + cliente.dizerCarroPreferido());
console.log("Carro que comprou: " + cliente.dizerCarroQueTem());
