function calcula() {
    // Obter os valores dos inputs
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    // Verifica os valores
    if (!isNaN(n1) && !isNaN(n2)) {

        // Calcula a soma
        var soma = n1 + n2;

        // Exibir o resultado na página
        document.getElementById('resultado').innerText = 'Resultado: ' + soma;
    } 
}