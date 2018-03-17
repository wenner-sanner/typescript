"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.inserir = function (object) {
        console.log('Inseriu no banco');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Atualizou no banco');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Removeu o registro no banco');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Selecionou um registro');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Selecionou todos os registros');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
