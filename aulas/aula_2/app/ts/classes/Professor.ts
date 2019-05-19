/*Seguindo o exemplo da classe Aluno também iremos herdar código de Pessoa, indicando o valor do tipo
genérico de Pessoa.*/

class Professor extends Pessoa<string>{ // T é string.

/*Também seguindo o exemplo da classe Aluno, criaremos um metodo, mas desta vez ele irá mudar o código do Professor.*/

    mudarCodigo(novoCodigo: string){
        this._codigo = novoCodigo;
    }
}