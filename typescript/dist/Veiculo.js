"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, velocidade) {
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    Veiculo.prototype.setVelocidade = function (velocidade) {
        this.velocidade = velocidade;
    };
    Veiculo.prototype.modeloCarro = function () {
        return this.modelo;
    };
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
