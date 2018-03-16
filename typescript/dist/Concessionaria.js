"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Concessionaria.prototype.fornecerHorariosDeFuncionameno = function () {
        return 'segunda a sexta das 08:00 às 18:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
