import { ConcessionariaIntrface } from './ConcessionariaInterface';
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaIntrface {
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

    fornecerHorariosDeFuncionameno(): string {
        return 'segunda a sexta das 08:00 às 18:00';
    }
}
