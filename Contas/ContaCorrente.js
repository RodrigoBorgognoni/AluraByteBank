import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente) {
        //Super referencia a classe herdada. No caso, da classe CONTA
        //necessário passar os parâmetro do método herdado

        // super(agencia, cliente, saldoInicial)
        super(agencia, cliente, 0);

        //herdando agencia e cliente da classe Conta
        ContaCorrente.numeroDeContas += 1;
    }

    // sobreescrevendo o comportamento de conta.sacar
    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
