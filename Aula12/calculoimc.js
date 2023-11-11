let massa = parseFloat(prompt("Digite seu peso em Kg"))
let altura = parseFloat(prompt("Digite sua altura em cm"))

let imc = massa / (altura * altura)

if (imc < 18.5){
    alert('Baixo peso muito grave');
    
} else if (imc > 16 && imc< 16.99) {
    alert("Baixo peso grave");

} else if (imc > 17 && imc < 18.49) {
    alert("Baixo peso");

} else if (imc > 18.50 && imc < 24.99) {
    alert("Peso normal");

} else if (imc > 24 && imc < 29.99) {
    alert("obrepeso");

} else if (imc > 30 && imc < 34.99) {
    alert("Obesidade de primeiro grau");

} else if (imc > 35 && imc < 39.99) {
    alert("Obesidade de segundo grau"); 

} else if (imc > 40) {
    alert ("Obesidade de terceiro grau");
}