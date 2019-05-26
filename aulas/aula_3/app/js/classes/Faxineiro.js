class Faxineiro extends Pessoa {
    constructor() {
        super(...arguments);
        this._salario = 1000;
    }
    mudarSalario(novoSalario) {
        this._salario = novoSalario;
    }
    get salario() {
        return this._salario;
    }
}
