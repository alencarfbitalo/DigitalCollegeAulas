function calcula() {
    // Usuario digitara os valores
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    // Verifica os valores
    //( && ) retorna verdadeiro se os dois operandos forem verdadeiros, caso contrário, retorna false
    if (!isNaN(n1) && !isNaN(n2)) {

        // Calcula a soma
        var soma = n1 + n2;

        // Mostra o resultado
        document.getElementById('resultado').innerText = 'Resultado = ' + soma;
    } 
}