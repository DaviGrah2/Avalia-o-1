function frete_values() {
    let peso = parseFloat(document.getElementById("peso").value);
    let valor_frete = 0.00;
    if (isNaN(peso) || isNaN(valor_frete)) {
        alert("Por favor, insira valores válidos para o frete.");
        return;
    }
    else if (peso < 0 || valor_frete < 0) {
        alert("Por favor, insira valores positivos para o frete.");
        return;
    }
    else if (peso <= 5) {
        valor_frete = 10.00

    }
    else if (peso > 5 && peso <= 20) {
        valor_frete = 20.00

    }
    else if (peso > 20) {
        valor_frete = 50.00

    }
    else {
        alert("O valor é invalido");
        frete_values()
    };
    document.getElementById("valor_frete").innerText = "Valor do frete: R$ " + valor_frete.toFixed(2);
};
