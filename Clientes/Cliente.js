export class Cliente {
    //Propriedades de instância podem ser definidas dentro dos métodos da classe
    // podemos declarar e instanciar direto no construtor

    // nome;
    // _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}
