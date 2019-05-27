/*Tornaremos a classe Pessoa abstrata, já que não queremos que ela seja instanciada, ou seja não
queremos que ninguem crie uma nova pessoa apenas alunos, professores, faxineiros, etc*/

abstract class Pessoa<T>{

    constructor(protected _nome: string, protected _idade: number, protected _codigo: T){} 

}