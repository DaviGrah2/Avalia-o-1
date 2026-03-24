function frete_values() {
    let peso = parseFloat(document.getElementById('peso').value);
    let valor_frete = 0;

    if (peso <= 5) {
        valor_frete = 10
        
    }
    if (peso > 5 && peso <= 20) {
        valor_frete = 20
        
    }
    if (peso > 20) {
        valor_frete = 50
        
    }
    if (peso < 0) {
        alert("O valor é invalido");
        frete_values() 
    }
    document.getElementById('valor_frete').innerText = "Valor do frete: R$ " + valor_frete.toFixed(2);
};


