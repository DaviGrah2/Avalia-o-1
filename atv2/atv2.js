function frete_values() {
    let peso = Number(prompt("Qual o peso do produto :"));
    let valor_frete;

    if (peso <= 5) {
        valor_frete = 10.00
    }
    if (peso > 5 && peso <= 20) {
        valor_frete = 20.00
    }
    if (peso > 20) {
        valor_frete = 50.00
    }
    else {

        alert("O valor é invalido");
        frete_values()
    }

}
frete_values()