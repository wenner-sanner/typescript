import Veiculo from './Veiculo'

export default class Moto extends Veiculo {

    constructor(modelo: string, velocidade: number) {
        super(modelo, velocidade);
    }

    public acelerar(): void {
        this.setVelocidade(this.velocidadeAtual() + 16);
    }

}