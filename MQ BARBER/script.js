

let botaoConfirmaEl = document.querySelector('.botao__confirma');

botaoConfirmaEl.addEventListener('click', function() {
    event.preventDefault();

    let tabelaNomeEl = document.querySelector('.tabela__nome');
    let nome = tabelaNomeEl.value;

    alert(nome + ' seu agendamento foi realizado com sucesso!')
});