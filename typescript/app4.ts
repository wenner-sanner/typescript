import ConcessionariaDao from './ConcessionariaDao';
import Concessionaria from './Concessionaria';

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);
dao.atualizar(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();