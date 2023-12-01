//Retorne todos os usuários que são ativos.

const usuarios = [
    { id: 1, nome: "Juliana Moraes", email: "juliana.moraes@example.com", ativo: true }
    { id: 2, nome: "Marta Rocha", email: "marta.rocha@example.com", ativo: true },
    { id: 3, nome: "Pedro Gomes", email: "pedro.gomes@example.com", ativo: false },
    { id: 4, nome: "Ana Silva", email: "ana.silva@example.com", ativo: true },
    { id: 5, nome: "Carlos Souza", email: "carlos.souza@example.com", ativo: false },
];

function getActiveUsers() {
	return usuarios.filter((usuario) => usuario.ativo)
}

console.log(getActiveUsers())


//Retorne um novo array contendo apenas nome e email.

const carrinho = [].slice()

//Ordene o array em ordem alfabética pelo nome.

function getActiveUsers() {
	return usuarios.map((usuario) => { 
		return {
			nome: usuario.nome,
			email: usuario.email,
		}
	})
}