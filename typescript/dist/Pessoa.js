"use strict";
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
