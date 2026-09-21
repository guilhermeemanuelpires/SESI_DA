//true == X
//false == o
var ordem_jogada = true;
var total_de_jogadas = 0;
var total_de_vitorias_x = 0;
var total_de_vitorias_o = 0;

function jogar(num_btn) {
    // BUSQUE O BOTÃO QUE ESTA SENDO CLICADO
    const botao = document.getElementById(num_btn);

    // ADICIONE O VALOR "X" OU "O" NO BOTÃO QUE FOI CLICADO
    if (ordem_jogada === true) {
        botao.innerHTML = "o";
        // ordem_jogada = false;
    } else {
        botao.innerHTML = "x";
        // ordem_jogada = true;
    }

    //VALIDAÇÃO DOS GANHADORES
    validarGanhador();
    ordem_jogada = !ordem_jogada;
}

function validarGanhador() {

    const btn1_vlr = document.getElementById("1").innerHTML;
    const btn2_vlr = document.getElementById("2").innerHTML;
    const btn3_vlr = document.getElementById("3").innerHTML;
    const btn4_vlr = document.getElementById("4").innerHTML;
    const btn5_vlr = document.getElementById("5").innerHTML;
    const btn6_vlr = document.getElementById("6").innerHTML;
    const btn7_vlr = document.getElementById("7").innerHTML;
    const btn8_vlr = document.getElementById("8").innerHTML;
    const btn9_vlr = document.getElementById("9").innerHTML;

    if ((btn1_vlr == btn2_vlr)
        && (btn1_vlr == btn3_vlr)
        && (btn1_vlr !== "")
        && (btn2_vlr !== "")
        && (btn3_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn4_vlr == btn5_vlr)
        && (btn4_vlr == btn6_vlr)
        && (btn4_vlr !== "")
        && (btn5_vlr !== "")
        && (btn6_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn7_vlr == btn8_vlr)
        && (btn7_vlr == btn9_vlr)
        && (btn7_vlr !== "")
        && (btn8_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn1_vlr == btn4_vlr)
        && (btn4_vlr == btn7_vlr)
        && (btn1_vlr !== "")
        && (btn4_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn2_vlr == btn5_vlr)
        && (btn2_vlr == btn8_vlr)
        && (btn2_vlr !== "")
        && (btn5_vlr !== "")
        && (btn8_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn3_vlr == btn6_vlr)
        && (btn3_vlr == btn9_vlr)
        && (btn3_vlr !== "")
        && (btn6_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn1_vlr == btn5_vlr)
        && (btn1_vlr == btn9_vlr)
        && (btn1_vlr !== "")
        && (btn5_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if ((btn3_vlr == btn5_vlr)
        && (btn3_vlr == btn7_vlr)
        && (btn3_vlr !== "")
        && (btn5_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        limparJogo();
        contabilizarGanhadores();
    } else if (
        btn1_vlr !== ""
        && btn2_vlr !== ""
        && btn3_vlr !== ""
        && btn4_vlr !== ""
        && btn5_vlr !== ""
        && btn6_vlr !== ""
        && btn7_vlr !== ""
        && btn8_vlr !== ""
        && btn9_vlr !== ""
    ) {
        alert("Empate!");
        limparJogo();
        contabilizarGanhadores();
    }
}

function limparJogo() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
}

function contabilizarGanhadores() {


    total_de_jogadas++;

    if (ordem_jogada == true) {
        total_de_vitorias_o++;
    } else {
        total_de_vitorias_x++;
    }

    document.getElementById("total_de_jogadas").innerHTML = "Total de jogadas: " + total_de_jogadas;
    document.getElementById("total_o").innerHTML = "Total de vitorias O : " + total_de_vitorias_o;
    document.getElementById("total_x").innerHTML = "Total de vitorias X : " + total_de_vitorias_x;

}