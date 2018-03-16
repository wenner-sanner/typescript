import Veiculo from './Veiculo'

export default class Moto extends Veiculo {

    constructor(modelo: string, velocidade: number) {
        super(modelo, velocidade);
    }

}