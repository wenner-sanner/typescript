import Carro from './Carro';
import Pessoa  from './Pessoa';
import Concessionaria from './Concessionaria';

/**Concessionaria*/
let carroA = new Carro('Gol', 4,);
let carroB = new Carro('Bmw', 4);
let carroC = new Carro('Amarok', 4);

let  listaDeCarros: Array<Carro> = [];
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);

let concessionaria = new Concessionaria('Rua do Norte', listaDeCarros);

console.log(`Endereco: ${concessionaria.mostraEndereco()}`);

let carros = concessionaria.mostraListaDeCarros();
carros.forEach((carro) =>{
    console.log(`Carro: ${carro.modeloCarro()}`);
});

// for (const carro of carros) {
//     console.log(`Carro: ${carro.modeloCarro()}`);
// }

/** Cliente*/
console.log('\n');

let nome = 'Wenner';
let cliente = new Pessoa(nome, carroB, carroC);

console.log(`Carro que comprou: ${cliente.dizerCarroQueTem()}`);

concessionaria.mostraListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});


console.log(`Cliente: ${cliente.dizerNome()}`);
console.log(`Carro preferido: ${cliente.dizerCarroPreferido()}`);
console.log(`Carro que comprou: ${cliente.dizerCarroQueTem()}`);
