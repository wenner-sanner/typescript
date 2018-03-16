import { DaoInterface} from './DaoInterface';
import Concessionaria from './Concessionaria';

export default class ConcessionariaDao implements DaoInterface{
    
    nomeTabela: string = 'tb_concessionaria';

    public inserir(object: Concessionaria): boolean {
        console.log('Inseriu no banco')
        return true;
    }

    public atualizar(object: Concessionaria): boolean {
        console.log('Atualizou no banco');
        return true;
    }

    remover(id: number): Concessionaria {
        console.log('Removeu o registro no banco');
        return new Concessionaria('', []);
    }

    public selecionar(id: number): Concessionaria {
        console.log('Selecionou um registro');        
        return new Concessionaria('', []);
    }

    public selecionarTodos(): Array<Concessionaria> {
        console.log('Selecionou todos os registros')

        return [new Concessionaria('',[])];
    }

}