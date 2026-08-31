const campo1 = document.getElementById("campo1");
const campo2 = document.getElementById("campo2");
const resultado = document.getElementsByTagName("h1")[0];

function somaDeDoisValores() {
    var soma = Number(campo1.value) + Number(campo2.value);
    // alert("A SOMA DOIS VALORES É : " + soma );
    resultado.innerHTML = "Resultado: " + soma;
}