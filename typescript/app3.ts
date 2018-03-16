import Carro from './Carro';
import Moto from './Moto';
import Concessionaria  from './Concessionaria';

let carro = new Carro('Veloster', 3);
let moto = new Moto('CG-fan', 180);

console.log(`Velocidade atual: ${moto.velocidadeAtual()}`);
moto.acelerar();
console.log(`Sobrecescreve o metodo acelera: ${moto.velocidadeAtual()}`);

let concessionaria = new Concessionaria('', []);
console.log(concessionaria.fornecerHorariosDeFuncionameno() );