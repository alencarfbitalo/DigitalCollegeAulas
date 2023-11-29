/* 4) Desenvolver um algoritmo que leia a altura de 15 pessoas.
Este programa deverá calcular e mostrar :

a. A menor altura do grupo;
b. A maior altura do grupo;

*/

// Função principal para ler as alturas e exibir os resultados
function entradaUsuario() {

  // Array para armazenar as alturas
  let alturas = [];

  // Loop para ler altura das pessoas
  for (let i = 1; i <= 6; i++) {

      // Utiliza o prompt para obter a altura do usuário
      let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));

      // Adiciona a altura ao array
      alturas.push(altura);
  }

  // Chama a função para calcular as alturas e armazena o resultado
  let resultado = calcularAlturas(alturas);

  // Exibe os resultados
  alert("Menor altura do grupo: " + resultado.menorAltura.toFixed(2) + " metros");
  //  O toFixed() método arredonda a string para um número especificado de casas decimais.
  alert("Maior altura do grupo: " + resultado.maiorAltura.toFixed(2) + " metros");
}

// Chama a função principal
entradaUsuario();


// Função para calcular a menor e a maior altura do grupo
function calcularAlturas(alturas) {
  
  // Inicializa as variáveis altura.
  let menorAltura = alturas[0];
  let maiorAltura = alturas[0];

  /* "i" tera sobre as alturas para encontrar a menor e a maior altura */
  for (let i = 1; i < alturas.length; i++) {

      // Verifica se a altura atual é menor que a "menorAltura" atual.
      if (alturas[i] < menorAltura) {
          menorAltura = alturas[i];
      }

      // Se verdadeiro, atualiza "maiorAltura" com a altura maior.
      if (alturas[i] > maiorAltura) {
          maiorAltura = alturas[i];
      }
  }

  // Retorna com as alturas encontradas
  return {
      menorAltura: menorAltura,
      maiorAltura: maiorAltura
  };
}