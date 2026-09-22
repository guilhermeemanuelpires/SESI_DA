
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
        window.location.href = "home.html";
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
    // 1º Carregar os valores dos campos NOME, PALAVRA-PASSE e a NOVA_SENHA
    const nome = document.getElementById("nome");
    const palavra_passe = document.getElementById("palavra_passe");
    const nova_senha = document.getElementById("nova_senha");

    // 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE
    const ls_nome = localStorage.getItem("nome");
    const ls_palavra_passe = localStorage.getItem("palavra_passe");
    // const ls_senha = localStorage.getItem("senha");


    // 3º Comparar se os valores carregados nos campos da tela
    // são compatíveis com os valores armazenados no localStorage.
    if (nome.value == ls_nome && palavra_passe.value == ls_palavra_passe) {
        // Se forem iguais, exibir a senha na tela ou em um alert.
        // alert("SENHA: " + ls_senha);
        localStorage.setItem("senha", nova_senha.value);
        window.location.href = "login.html";
    } else {

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


        var quantidade_erros = Number(localStorage.getItem("quantidade_erros")) || 1;
        // Se forem diferentes, notificar o usuário na tela ou em um alert
        // informando que os dados não são compatíveis.
        // Além disso, limpar os campos de entrada (inputs).
        alert("Nome ou palavra passe inválida!");

        nome.value = "";
        palavra_passe.value = "";
        nova_senha.value = "";

        quantidade_erros++;

        localStorage.setItem("quantidade_erros", quantidade_erros);

        if (quantidade_erros >= 3) {
            nome.disabled = true;
            palavra_passe.disabled = true;
            nova_senha.disabled = true;
        }


    }

}


