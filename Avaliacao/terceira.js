// 3) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200. 


// Função para gerar e escrever números ímpares entre 100 e 200
function numerosImpares() {

    // chama a variavel Inicio
   let inicio = 100;
    
    // chama a variavel Fim 
   let fim = 200;
    
    // Loop para verificar e escrever os números ímpares
    for (let i = inicio; i <= fim; i++) {
        
      // Verifica se o número é ímpar
      if (i % 2 !== 0) {
        // Escreve o número ímpar no console
        alert(i);
      }
    }
  }

  // Chamada da função para gerar e escrever os números ímpares
  numerosImpares();

  
  /*
  o loop irá iterar do valor inicial até o valor do fim e 
  imprimirá cada valor de "i" no console em cada iteração.

  function; executa uma tarefa específica

  let; declare a variável.

  for; loop

  let i = inicio; Isto inicializa uma variável "i" e atribui
  a ela o valor da variável "inicio". A palavra-chave 
  "let" é usada para declarar uma variável com escopo de bloco.

  i <= fim; Esta é a condição para o loop continuar.
  Enquanto o valor de "i" for menor ou igual ao valor do fim, 
  o loop continuará a ser executado.

  i++: Esta é a instrução de incremento. 
  Aumenta o valor "i" em 1 em cada loop.

  A condição (i % 2 !== 0) verifica se o resto da divisão 
  da variável "i" por 2 não é igual a 0
  verifica se "i" é um número ímpar.

  */
