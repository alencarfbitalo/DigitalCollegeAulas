// 2) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar. 


// Solicita ao usuário que insira um número
let numero = parseFloat(prompt("Digite um numero:"))

// Código a ser executado quando o número for par
if (numero % 2 === 0) {
    alert("O número é par.");

// Código a ser executado quando o número for ímpar
} else {
    alert("O número é ímpar.");
}


/*
O código verifica se a variável numero é par. 

let; declare a variável.

parseFloat; Analisa os valore.

Prompt; exibe uma caixa de diálogo que solicita a
entrada do usuário.

if; código a ser executado, se a condição for par. VERDADEIRO

else; código a ser executado, se a condição for ímpar. FALSO

A condição "numero" % 2 === 0 
é uma expressão booleana que verifica 
se o valor da variável "número" é igual a 0.
estamos verificando se numero é múltiplo de 2

*/
