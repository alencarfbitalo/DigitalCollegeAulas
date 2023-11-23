// 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C. 


// Receberá os valores aplicados pelo usuario
let a = parseFloat(prompt("Digite um valor para A:"))
let b = parseFloat(prompt("Digite um valor para B:"))
let c = parseFloat(prompt("Digite um valor para C:"))

// Faz a soma das letras a+B e verifica se a soma é MENOR que c
 if (a + b < c) {
    alert("A soma de A + B é MENOR que C.");

// Faz a soma das letras a+B e verifica se a soma é MAIOR que c
    } else if (a + b > c) {
        alert("A soma de A + B é MAIOR que C.");

// Faz a soma das letras a+B e verifica se a soma é IGUAL que c
    } else if (a + b === c) {
        alert("A soma de A + B é IGUAL C.");

    }

    

    /* 

    let; Declara a variável.

    parseFloat; Analisa os valore.

    Prompt; Exibe uma caixa de diálogo que solicita a
    entrada do usuário.

    if; Código a ser executado, se a condição 
    menor que for verdadeira.

    else if; Nova condição a ser testada.

    */