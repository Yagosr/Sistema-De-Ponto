function abrirFolhaPagamento() {
    var nomeFuncionario = document.getElementById('funcionarioNome').value;
    var senhaFuncionario = document.getElementById('funcionarioSenha').value;
    var nomeFuncionarioElemento = document.getElementById('nomeFuncionario');
    var folhaPagamento = document.getElementById('folhaPagamento');
    var title = document.getElementById('title');
    var button = document.getElementById('button');

    if (nomeFuncionarioElemento) {
        nomeFuncionarioElemento.textContent = nomeFuncionario;
    }

    if (folhaPagamento) {
        folhaPagamento.style.width = '50%';
        folhaPagamento.style.visibility = 'visible';
        folhaPagamento.style.opacity = '1';
    }

    if (title) {
        if (window.innerWidth > 600) {
            title.style.width = '94.5%';
        }
    }

    button.disabled = nomeFuncionario.trim() === '' || senhaFuncionario.trim() === '';
}