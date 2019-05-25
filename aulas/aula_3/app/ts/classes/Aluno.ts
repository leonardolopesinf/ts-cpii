class Aluno extends Pessoa<number>{

    mudarNome(novoNome: string){
        this._nome = novoNome;
    }
}