"use strict";
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
