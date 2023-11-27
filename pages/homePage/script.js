function atualizarJornada() {
    var entradaElemento = document.getElementById('entrada');
    var saidaElemento = document.getElementById('saida');
    var jornadaAtualElemento = document.getElementById('jornadaAtual');
    
    if (entradaElemento && saidaElemento && jornadaAtualElemento) {
        var entradaValor = entradaElemento.value;
        var saidaValor = saidaElemento.value;

        // Calcula a jornada (pode ser necessário ajustar a lógica conforme necessário)
        var jornada = calcularJornada(entradaValor, saidaValor);

        // Atualiza dinamicamente o conteúdo da jornada
        jornadaAtualElemento.textContent = 'Jornada Atual: ' + jornada + ' horas';
    }
}

function calcularJornada(entrada, saida) {
    var entradaDate = new Date('2000-01-01T' + entrada);
    var saidaDate = new Date('2000-01-01T' + saida);

    // Calcula a diferença em horas
    var diferencaEmMilissegundos = saidaDate - entradaDate;
    var diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

    return diferencaEmHoras.toFixed(2);
}