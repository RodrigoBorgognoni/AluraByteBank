//Classe Abstrada é uma classe que nunca será instanciada, apenas herdada
export class Conta {
    constructor(agencia, cliente, saldoInicial) {
        //executa um erro custom se tentar instanciar objeto Conta diretamente
        //Conta é classe muito genérica e só deve ser usada para ser herdada
        //Classe abstrata
        if (this.constructor == Conta) {
            throw new Error("Não é permitido instanciar Conta");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor) {
        // validação para ver se o parâmetro passado é do tipo Cliente (funciona apenas para classes)
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    //Método Abstrato
    sacar() {
    // Vazio pois assim obrigamos a ser sobreescrito em classes filhas
    // Cada classe filha tem uma taxa diferente
    throw new Error("Método Sacar da Conta é Abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo <= valorSacado) return 0;

        this._saldo -= Math.abs(valorSacado);
        return valorSacado;
    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
        return this._saldo;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
