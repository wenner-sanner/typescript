import Carro from './Carro';
import Moto from './Moto'

let carro = new Carro('Veloster', 3);
let moto = new Moto('CG-fan', 180);

console.log(moto.velocidadeAtual());
moto.acelerar();
console.log(moto.velocidadeAtual());

console.log(carro);
console.log(moto);