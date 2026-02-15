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
    if (qtd === tamanho) {
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
    if(qtd == 0){
        swal({
            title: "ERRO!",
            text: "A fila está vazia, não há início.",
            icon: "error",
        });
    return; 
    } else {
        swal("Início da fila: " + fila[inicio]);
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