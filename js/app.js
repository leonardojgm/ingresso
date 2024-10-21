function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    //alert(tipo);
    //alert(qtd);

    if (!qtd || qtd <= 0) {
        alert('Quantidade inválida. Verifique!');

        return;
    }

    comprarLugares(tipo, qtd);
}

function comprarLugares(tipo,qtd) {
    let lugar = document.getElementById(`qtd-${tipo}`);
    let qtdLugares = parseInt(lugar.textContent);

    if (qtd > qtdLugares) {
        alert(`Quantidade indisponível para tipo ${tipo}!`);

        return;
    } else {    
        lugar.textContent = qtdLugares -= qtd;; 

        alert('Compra realizada com sucesso!');
    }
}