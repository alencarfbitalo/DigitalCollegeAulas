// 3) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200. 


// Função para gerar e escrever números ímpares entre 100 e 200
function numerosImpares() {
    // Início
   let inicio = 100;
    
    // Fim 
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
