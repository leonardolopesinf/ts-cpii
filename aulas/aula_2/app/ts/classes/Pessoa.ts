/*A classe Pessoa é uma classe genérica.
    Uma classe genérica é aquela que vai ser herdada por mais de uma classe, porém o tipo de alguns valores
    variam dependendo de cada classe.
        Por exemplo, tanto a classe Aluno quanto Professor estão herdando código de Pessoa, porém o "_codigo"
        do Aluno é um number, já o do Professor deve ser uma string.
            Para resolver este problema iremos na criação da classe lhe atribuir um tipo genérica após
            seu nome, e o tipo deve estar dentro de "<>".
                Após declarar a variável iremos dizer que o tipo do "_codigo" é justamente o nosso tipo generico.*/


class Pessoa<T>{ // T é o tipo genérico.
    
    /*Anteriormente quando não queriamos que ninguem fora a classe pudesse mudar os valores das nossas
    variaveis usavamos o "private", porém se utilizarmos novamente o "private" não iremos dar permissão para as
    Classes Filho*/

    constructor(protected _nome: string, protected _idade: number, protected _codigo: T){} // codigo é do tipo T.

}

/*No momento em que uma classe usar o "extends" para herdar o código de Pessoa, terá que ser indicado o tipo
que será usado no lugar do tipo T.
    Por exemplo, se o tipo indicado for string, a nossa variavel "_codigo" será do tipo string.*/