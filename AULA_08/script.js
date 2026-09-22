function login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const cmapo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso! 👍");
    } else {
        alert("Usuário ou senha inválidos! 👎");
    }

}


function cadastro() {
    // 1º Carregar os campos de cadastro
    // NOME, USUÁRIO, SENHA, PALAVRA-PASSE
    const nome = document.getElementById("nome").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const palavra_passe = document.getElementById("palavra_passe").value;

    // 2º Cadastrar os dados no localStorage
    // Ex.: localStorage.setItem("NOME", valor)
    // OBS.: "valor" é o dado que foi carregado no passo 1
    localStorage.setItem("nome", nome);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    localStorage.setItem("palavra_passe", palavra_passe);

    // 3º Redirecionar para a tela de login
    window.location.href = "login.html";
}


function recuperar_senha() {
    // 1º Carregar os valores dos campos NOME e PALAVRA-PASSE


    // 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE


    // 3º Comparar se os valores carregados nos campos da tela
    // são compatíveis com os valores armazenados no localStorage.
    //
    // Se forem iguais, exibir a senha na tela ou em um alert.
    //
    // Se forem diferentes, notificar o usuário na tela ou em um alert
    // informando que os dados não são compatíveis.
    // Além disso, limpar os campos de entrada (inputs).


    // DESAFIO SEM I.AAAAA:
    //
    // Vocês devem implementar um controle de tentativas para a recuperação de senha.
    //
    // REGRAS:
    // Vocês devem validar a quantidade de tentativas incorretas
    // de NOME e PALAVRA-PASSE.
    //
    // Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs)
    // e impedir que o usuário realize uma nova tentativa de recuperação de senha.
    //
    // Lembrem-se de salvar a quantidade de erros no localStorage.
}


