"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/**Concessionaria*/
var carroA = new Carro_1.default('Gol', 4);
var carroB = new Carro_1.default('Bmw', 4);
var carroC = new Carro_1.default('Amarok', 4);
var listaDeCarros = [];
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);
var concessionaria = new Concessionaria_1.default('Rua do Norte', listaDeCarros);
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
var cliente = new Pessoa_1.default(nome, carroB, carroC);
console.log("Carro que comprou: " + cliente.dizerCarroQueTem());
concessionaria.mostraListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log("Cliente: " + cliente.dizerNome());
console.log("Carro preferido: " + cliente.dizerCarroPreferido());
console.log("Carro que comprou: " + cliente.dizerCarroQueTem());
