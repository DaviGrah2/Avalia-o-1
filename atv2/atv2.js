function frete_values() {
    let peso = 0.00;
    let valor_frete = 0.00;

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
    }
    document.getElementById('valor_frete').innerText = "Valor do frete: R$ " + valor_frete.toFixed(2);
};
frete_values()