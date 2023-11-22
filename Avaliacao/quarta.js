function calcularFatorial(numero)  

  let numero = parseFloat(prompt("Digite um numero:"))
  let sequencia = numero + "! = ";

  for (let i = numero; i > 0; i--)    resultado *= i;
    sequencia += i;
    if (i !== 1)      sequencia += " X ";
      sequencia += " = " + resultado;
  return sequencia;
  
  alert(sequenciaFatorial)


/* Exemplo de uso
let numero = 5;
let sequenciaFatorial = calcularFatorial(numero);
alert(sequenciaFatorial);
