import { Cliente } from "./Clientes/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";

const diretor = new Diretor("Rodrigo", "40853341826", 10000)
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Tamires", "11133344456", 5000)
gerente.cadastrarSenha("123");

const cliente1 = new Cliente("Ricardo", "11122233309");
const cliente2 = new Cliente("Alice", "88822233309");
const cliente3 = new Cliente("Winter", "55566677789", "aespa")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456789");
const cliente3EstaLogado = SistemaAutenticacao.login(cliente3,"aespa");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(cliente3EstaLogado);