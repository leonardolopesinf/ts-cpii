class Professor extends Pessoa {
    constructor() {
        super(...arguments);
        this._salario = 2000;
    }
    mudarCodigo(novoCodigo) {
        this._codigo = novoCodigo;
    }
    mudarSalario(novoSalario) {
        this._salario = novoSalario;
    }
    get salario() {
        return this._salario;
    }
}
