class FilaCircular {
  constructor(tamanho) {
    this.tamanho = tamanho;      // tamanho máximo da fila
    this.dados = new Array(tamanho);
    this.inicio = 0;             // aponta para o primeiro elemento
    this.fim = -1;               // aponta para a última posição inserida
    this.qtd = 0;                // quantidade de elementos
  }

  estaVazia() {
    return this.qtd === 0;
  }

  estaCheia() {
    return this.qtd === this.tamanho;
  }

  inserir(valor) {
    if (this.estaCheia()) {
      throw new Error("Fila cheia");
    }

    this.fim = (this.fim + 1) % this.tamanho;
    this.dados[this.fim] = valor;
    this.qtd++;
  }

  remover() {
    if (this.estaVazia()) {
      throw new Error("Fila vazia");
    }

    const removido = this.dados[this.inicio];
    this.inicio = (this.inicio + 1) % this.tamanho;
    this.qtd--;
    return removido;
  }

  listar() {
    let resultado = [];
    let i = this.inicio;

    for (let c = 0; c < this.qtd; c++) {
      resultado.push(this.dados[i]);
      i = (i + 1) % this.tamanho;
    }

    return resultado;
  }
}