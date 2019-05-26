class Professor extends Pessoa<string> implements Funcionario{

    mudarCodigo(novoCodigo: string){
        this._codigo = novoCodigo;
    }

    private _salario: number = 2000;

    mudarSalario(novoSalario: number){
        this._salario = novoSalario;
    }

    get salario(){
        return this._salario;
    }
}