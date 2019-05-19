/*Criaremos a classe Aluno, que recebe o código da classe Pessoa, ou seja todo código em Pessoa está em Aluno.
    Chamamos a classe que recebe o código de Classe Filha e a que dá código de Classe Pai.
        Fazemos isso a partir do "extends" onde indicamos qual será a classe que herdaremos código.
            Como a Classe Pai é genérica temos que informar qual será o valor do seu tipo genérico.
                Para melhor entendimento do que é uma classe genérica, visite o "Pessoa.ts".*/
class Aluno extends Pessoa {
    /*Adicionamos um método para nossa classe.
        Um metódo não é nada mais que uma ação que a classe pode realizar.
            No metodo "mudarNome" recebemos um novo nome que deve ser uma string e mudamos o nome do nosso Aluno.
                O nome do aluno receberá o "novoNome" que é o valor que iremos receber.*/
    mudarNome(novoNome) {
        this._nome = novoNome;
    }
}
