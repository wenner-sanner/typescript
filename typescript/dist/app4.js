"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = __importDefault(require("./ConcessionariaDao"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var dao = new ConcessionariaDao_1.default();
var concessionaria = new Concessionaria_1.default('', []);
dao.inserir(concessionaria);
dao.atualizar(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();
