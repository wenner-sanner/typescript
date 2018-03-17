"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// import ConcessionariaDao from './ConcessionariaDao';
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Dao_1 = require("./Dao");
// let dao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
dao.atualizar(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();
