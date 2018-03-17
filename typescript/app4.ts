// import ConcessionariaDao from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import {Dao} from './Dao';

// let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria:Concessionaria = new Concessionaria('', []);

let dao:Dao<Concessionaria> = new  Dao<Concessionaria>();

dao.inserir(concessionaria);
dao.atualizar(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();