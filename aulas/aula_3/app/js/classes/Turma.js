class Turma {
    constructor(_nome, _serie) {
        this._nome = _nome;
        this._serie = _serie;
        this._listaAlunos = [];
    }
    adicionaAluno(aluno) {
        this._listaAlunos.push(aluno);
    }
    listaAlunos() {
        return [].concat(this._listaAlunos);
    }
}
