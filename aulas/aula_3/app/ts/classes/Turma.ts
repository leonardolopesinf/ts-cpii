class Turma{

    private _listaAlunos: Aluno[] = [];

    constructor(readonly _nome: string, readonly _serie: string){}

    adicionaAluno(aluno: Aluno){
        this._listaAlunos.push(aluno);
    }

    listaAlunos(){
        return [].concat(this._listaAlunos);
    }

}