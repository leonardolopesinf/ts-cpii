/*Tornaremos a classe Pessoa abstrata, já que não queremos que ela seja instanciada, ou seja não
queremos que ninguem crie uma nova pessoa apenas alunos, professores, faxineiros, etc*/
class Pessoa {
    constructor(_nome, _idade, _codigo) {
        this._nome = _nome;
        this._idade = _idade;
        this._codigo = _codigo;
    }
}
