/*Vamos fazer com que professor implemente a interface Funcionario, desta forma terá que seguir os requisitos
para que uma classe seja um funcionario.
    Para implementar a interface usaremos o "implements" seguido do nome da interface desejada.*/

class Professor extends Pessoa<string> implements Funcionario{

    mudarCodigo(novoCodigo: string){
        this._codigo = novoCodigo;
    }

    /*Adicionaremos os requisitos necessarios para que Professor seja um Funcionario.
        Primeiro temos que adicionar um atributo salário.
            Em seguida precisamos criar um metodo "mudarSalario" que recebera um novo salario do tipo number
            e não irá possuir retorno algum.*/

    /*Criaremos uma variavel "_salario" que armazenará o salario inicial de um Professor.
        Queremos que apenas a classe Professor possa acessar esta variavel, então usaremos o "private".*/
    
    private _salario: number = 2000;

    /*Criaremos um dos padrões da interface Funcionário.
        Um metodo que recebe um novo salario do tipo number, e o mesmo irá mudar o valor da nossa variavel
        "_salario", a partir do valor recebido.*/

    mudarSalario(novoSalario: number){
        this._salario = novoSalario;
    }

    /*Por mais que tenhamos o "private _salario" este é apenas uma varivel, não temos o atributo "salario".
        Outro problema é que mesmo a variavel sendo privada, eu quero poder acessar o seu valor de alguma forma.
            Aí que vem o "pulo do gato" utilizaremos uma unica solução para os 2 problemas, usaremos o "get".
                O "get" é uma propriedade que utilizaremos em nosso metodo, ele será responsavel por criar um
                atributo para nossa classe, criaremos então um atributo "salario" que irá retornar nossa variavel
                "salario".
                    Quando criamos um "getter" (metodo com propriedade "get") podemos acessar este atributo
                    utilizando "nomeDaInstanciaDaClasse.nomeDoAtributoCriado"; testaremos isto no "colegio.ts".*/

    get salario(){
        return this._salario;
    }
}