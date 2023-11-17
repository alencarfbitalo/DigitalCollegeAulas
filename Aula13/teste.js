const calcularproduto = (numero1, numero2, numero3) => {

	return numero1 * numero2 * numero3;

}

const valor1 = Number(prompt("Digite um numero"))
const valor2 = Number(prompt("Digite um numero"))
const valor3 = Number(prompt("Digite um numero"))

const resultado = calcularproduto (valor1, valor2, valor3)
alert (resultado)