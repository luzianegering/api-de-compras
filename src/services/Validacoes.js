class Validacoes {
    static autenticacaoNome(nome) {
        if (nome.length < 8) {
            throw new error('Campo nome deve ter ao menos 8 caracteres!');
        } else {
            return nome.toUpperCase()
        }
    }
    static autenticacaoEmail(email) {
        const mail = /\S+@\S+\.\S+/
        mail.test(email)
        return email
    }
    static autenticacaoSenha(senha) {
        let retorno = false
        const letrasMaiusculas = /[A-Z]/
        const letrasMinisculas = /[a-z]/

        const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/
        if (senha.length !== 8) {
            return retorno
        } else {
            let auxMa = 0
            let auxMin = 0

            let auxCEspeciais = 0
            for (let i = 0; i < senha.length; i++) {
                if (letrasMaiusculas.test(senha[i])) {
                    auxMa++
                }
                else if (letrasMinisculas.test(senha[i])) {
                    auxMin++
                }

                else if (caracteresEspeciais.test(senha[i])) {
                    auxCEspeciais++
                }

            }

            if (auxMa > 0) {
                if (auxMin > 0) {

                    if (auxCEspeciais > 0) {
                        retorno = true

                    }

                }
            }
            return senha
        }
    }
}

module.exports =  Validacoes;
