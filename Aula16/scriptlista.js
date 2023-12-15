function adicionarItem() {
    let itemInput = document.getElementById("itemInput");
    let listaItens = document.getElementById("listaItens");

    if (itemInput.value !== "") {
        alert("Por favor, insira um item válido.");

        let novoItem = document.createElement("li");

        novoItem.appendChild(document.createTextNode(itemInput.value));

        listaItens.appendChild(novoItem);

        itemInput.value = "";
    }
}  
