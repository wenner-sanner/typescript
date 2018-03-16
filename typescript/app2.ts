class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number;

    constructor(modelo: string, numeroDePortas: number, velocidade: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }

    public modeloCarro(): string {
        return this.modelo;
    }

    public acelerar(): void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade; 
    }
 
}

class Concessionaria {
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    public fornecerEndereco(): string {
        return this.endereco;
    }

    constructor(endereco: string, carros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = carros;
    } 
    
    public mostraEndereco(): string {
        return this.endereco;
    }
       
    public listaCarros(carros: Array<Carro>) {
        this.listaDeCarros = carros;
    }

    public mostraListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}

class Pessoa {
    private nome: string;
    private carroPreferido: Carro; 
    private  carroQueTem: Carro;
    
    constructor(nome: string, carroPreferido: Carro, carroQueTem: Carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carroQueTem = carroQueTem;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido.modeloCarro();
    } 

    public dizerCarroQueTem(): string {
        return this.carroQueTem.modeloCarro();
    }

    public comprarCarro(carro: Carro): void {
        this.carroQueTem = carro;
    }
}

/**Concessionaria*/
let carroA = new Carro('Gol', 4, 200);
let carroB = new Carro('Bmw', 4, 560);
let carroC = new Carro('Amarok', 4, 350);

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

concessionaria.mostraListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});


console.log(`Cliente: ${cliente.dizerNome()}`);
console.log(`Carro preferido: ${cliente.dizerCarroPreferido()}`);
console.log(`Carro que comprou: ${cliente.dizerCarroQueTem()}`);
