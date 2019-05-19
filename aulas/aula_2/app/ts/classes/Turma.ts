/*Criaremos uma classe Turma que possuirá 2 metodos.*/

class Turma{
    
    /*Iremos criar um array que irá listar os alunos.
        Podemos para isso definir o tipo do "_listaAlunos" como um array de Alunos, para isso usaremos o
        "Aluno[]", o "[]" indica que o tipo é um array.
            Precisamos definir um valor inicial para o _listaAlunos, iremos atribuir "[]" para ele.
                "[]" é apenas um array vazio, é como declarar um number com o valor 0.*/

    private _listaAlunos: Aluno[] = [];
    
    /*Nas variaveis do nosso constructor utilizaremos um tipo de encapsulamento diferente, usaremos o
    "readonly", que como o proprio nome diz, ele faz com que a variavel apenas possa ser lida, nada mais.
        É uma alternativa para o private, porém neste caso nem a própria classe pode atribuir valores para a
        variavel.*/

    constructor(readonly _nome: string, readonly _serie: string){}

    /*Para adicionar um aluno na turma, iremos criar um metodo que irá receber um aluno.
        O metodo deve adicionar o aluno no "_listaAlunos" e para isso usaremos o ".push".
            ".push" será utilizado logo a frente do "_listaAlunos" e ele deve receber dentro
            dos seus parenteses o valor ao qual deve ser alocado no "_listaAlunos".
                ".push" é um metodo do tipo Array, ou seja, só pode ser usada por arrays.*/

    adicionaAluno(aluno: Aluno){
        this._listaAlunos.push(aluno);
    }

    /*Este metodo será responsável por listar os alunos.
        Para isso quando o metodo for chamado ele deve retornar a nossa lista, usaremos então o "return"
            "return" irá retornar o valor entre ele e seu respectivo ";".
                Por questões de segurança, não devolveremos diretamente nossa lista, iremos retornar uma nova 
                lista que irá receber nosso "_listaAlunos", evitando assim que alguém modifique nossa lista de 
                alunos.
                    Usaremos o ".concat" que recebe dentro dos seus parenteses o valor ao qual deve ser armazenado
                    na nossa lista vazia.*/

    listaAlunos(){
        return [].concat(this._listaAlunos);
    }

}