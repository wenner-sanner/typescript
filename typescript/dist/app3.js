"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro = new Carro_1.default('Veloster', 3);
var moto = new Moto_1.default('CG-fan', 180);
console.log("Velocidade atual: " + moto.velocidadeAtual());
moto.acelerar();
console.log("Sobrecescreve o metodo acelera: " + moto.velocidadeAtual());
var concessionaria = new Concessionaria_1.default('', []);
console.log(concessionaria.fornecerHorariosDeFuncionameno());
