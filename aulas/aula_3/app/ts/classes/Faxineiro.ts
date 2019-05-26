class Faxineiro extends Pessoa<string> implements Funcionario{
    
    private _salario: number = 1000;

    mudarSalario(novoSalario: number){
        this._salario = novoSalario;
    }

    get salario(){
        return this._salario;
    }
}