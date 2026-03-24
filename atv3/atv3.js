function calcularPreco() {
    var total_compra = parseFloat(document.querySelector("#valor_compra").value);
    var frete = parseFloat(document.querySelector("#valor_frete").value);
    var desconto = 0;

    if (isNaN(total_compra) || isNaN(frete)) {
        alert("Por favor, insira valores válidos para a compra e o frete.");
        return;
    }
    if (total_compra < 0 || frete < 0) {
        alert("Por favor, insira valores positivos para a compra e o frete.");
        return;
    }
    if (total_compra <= 200) {
        desconto = 0;
    } else if (total_compra > 200 && total_compra <= 500) {
        desconto = 0.05;
    } else if (total_compra > 500) {
        desconto = 0.15;
    }

    total_compra -= total_compra * desconto;
    total_compra += frete;
    total_compra = total_compra.toFixed(2);

    document.querySelector("#resultado").textContent = `Valor a pagar: R$ ${total_compra}`;
}