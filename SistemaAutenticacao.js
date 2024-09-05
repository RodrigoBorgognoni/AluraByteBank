/*
ser autenticável significa ter o método "autenticar"
*/

export class SistemaAutenticacao {
    static login(usuario, senha) {
        if (SistemaAutenticacao.ehAutenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(usuario){
    //autenticar é a funcão cliada na classe
    //ou seja:
    //a classe passada como parametro possui o metodo autenticar e é uma função?
        return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }
}
