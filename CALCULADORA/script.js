
var qtd_calculos = 0;

const campo = document.getElementById("campo");

function digitar(valor) {

    if (qtd_calculos >= 3) {
        alert(`Você atingiu o limite de cálculos do plano gratuito.
Para continuar, assine nosso novo plano por apenas R$ 2,99.`);
    }else if (valor == 'limpar') {
        campo.value = "";
    } else if (valor == "=") {
        campo.value = eval(campo.value)
        qtd_calculos++
    } else {
        campo.value = campo.value + valor;
    }

}