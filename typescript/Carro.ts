import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    private numeroDePortas: number;

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo, 200);     
        this.numeroDePortas = numeroDePortas;
    }

}
