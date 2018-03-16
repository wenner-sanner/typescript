import Carro from './Carro'

export default class Concessionaria {
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
