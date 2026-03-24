var total_compra = 100 // tem que ter input
var frete = 10; // tem que ter input
var desconto = 0;

if (total_compra <= 200) {
    desconto = 0
}else if (total_compra > 200 && total_compra <= 500 ) {
    desconto = 0.05
}else if(total_compra > 500){
    desconto = 0.15
}

total_compra = total_compra * desconto;
total_compra = total_compra + frete; 
total_compra = total_compra.toFixed(2);

document.querySelector("#resultado").textContent = `Valor a pagar: ${total_compra}`