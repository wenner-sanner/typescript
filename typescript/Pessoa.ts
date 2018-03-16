import Carro from './Carro'

export default class Pessoa {
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
