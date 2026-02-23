let fila = [];
let tamanho = 0;
let inicio = 0;
let fim = 0;
let qtd = 0;

function iniciar_fila() {
    tamanho = parseInt(document.getElementById("valor").value);
    fila = new Array(tamanho);
    inicio = 0;
    fim = 0;
    qtd = 0;
    desenhar();
}

function reiniciar() {
    fila = [];
    tamanho = 0;
    inicio = 0;
    fim = 0;
    qtd = 0;

    desenhar();
}

function inserir() {
    if (tamanho == 0) {
        swal({
            title: "ERRO!",
            text: "A fila não foi iniciada, inicie ela dando seu valor inicial.",
            icon: "error",
        });
        return;
    }
    else if (qtd === tamanho) {
        swal({
            title: "ERRO!",
            text: "A fila está cheia, não é possivel adicionar mais valores.",
            icon: "error",
        });
        return;
    }

    fila[fim] = document.getElementById("inserir_valor").value;
    fim = (fim + 1) % tamanho;
    qtd++;
    desenhar();
}

function remover() {
    if (qtd === 0) {
        swal({
            title: "ERRO!",
            text: "A fila está vazia, não é possivel remover valores.",
            icon: "error",
        });
        return;
    }

    fila[inicio] = null;
    inicio = (inicio + 1) % tamanho;
    qtd--;
    desenhar();
}

function mostrar() {
    if (qtd === 0) {
        swal({
            title: "ERRO!",
            text: "A fila está vazia.",
            icon: "error",
        });
        return;
    }

    const escolha = document.getElementById("escolha_mostrar").value;

    if (escolha === "inicio") {
        swal("Início da fila: " + fila[inicio]);
    } else if (escolha === "fim") {
        let posFim = (fim - 1 + tamanho) % tamanho;
        swal("Fim da fila: " + fila[posFim]);
    }
}

function desenhar() {
    const container = document.getElementById("fila");
    container.innerHTML = "";

    const raio = 130;
    const centro = 175;

    for (let i = 0; i < tamanho; i++) {
        const angulo = (2 * Math.PI / tamanho) * i;
        const x = centro + raio * Math.cos(angulo) - 25;
        const y = centro + raio * Math.sin(angulo) - 25;

        const no = document.createElement("div");
        no.className = "no";
        no.style.left = x + "px";
        no.style.top = y + "px";
        no.textContent = fila[i] ?? "";

        if (i === inicio && qtd > 0) {
            no.style.background = "green";
        }

        if (i === fim && qtd < tamanho) {
            no.style.background = "red";
        }

        container.appendChild(no);
    }
}