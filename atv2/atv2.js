function frete_values() {
    let peso = 0.00;
    let valor_frete = 0.00;
    if (isNaN(peso) || isNaN(valor_frete)) {
        alert("Por favor, insira valores válidos para o frete.");
        return;
    }
    if (peso < 0 || valor_frete < 0) {
        alert("Por favor, insira valores positivos para o frete.");
        return;
    }
    if (peso <= 5) {
        valor_frete = 10.00

    }
    if (peso > 5 && peso <= 20) {
        valor_frete = 20.00

    }
    if (peso > 20) {
        valor_frete = 50.00

    }
    if (peso < 0) {
        alert("O valor é invalido");
        frete_values()
    };
    alert("O valor do frete é: " + valor_frete.toFixed(2));
};
