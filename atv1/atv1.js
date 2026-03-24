function CalculaImposto() {
    var valor = parseFloat(document.getElementById("valor").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var total = valor + (valor * (taxa / 100));
    if (isNaN(valor) || isNaN(taxa)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para o valor e a taxa.";
        return;
    }
    else if (valor < 0 || taxa < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores positivos para o valor e a taxa.";
        return;
    }
    else
    document.getElementById("resultado").innerText = "Valor total com imposto: " + total.toFixed(2);
}

document.getElementById("botao").addEventListener("click", function() {
    CalculaImposto();
});