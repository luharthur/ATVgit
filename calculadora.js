let display = document.getElementById('display');

function adicionarNumero(numero) {
    display.value += numero;
}

function adicionarOperacao(operacao) {
    display.value += operacao;
}

function limparDisplay() {
    display.value = '';
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
