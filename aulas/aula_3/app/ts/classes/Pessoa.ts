abstract class Pessoa<T>{

    constructor(protected _nome: string, protected _idade: number, protected _codigo: T){} 

}