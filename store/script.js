// Código que será executado assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    fetch('store/componentes/header/hearder.html')
        .then ((Response) => Response.text().then())
        .then((data)) => {
            document.getElementById("headerComponent").innerHTML = data
            })
        });


