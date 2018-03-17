import {DaoInterface} from './DaoInterface';

export class Dao<T> implements DaoInterface<T> {

    public inserir(object: T): boolean {
        console.log('Inseriu no banco')
        return true;
    }

    public atualizar(object: T): boolean {
        console.log('Atualizou no banco');
        return true;
    }

    remover(id: number): T{
        console.log('Removeu o registro no banco');
        return  Object();
    }

    public selecionar(id: number): T {
        console.log('Selecionou um registro');        
        return Object();
    }

    public selecionarTodos(): Array<T> {
        console.log('Selecionou todos os registros')

        return [Object()];
    }


}