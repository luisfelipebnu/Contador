let numero = 0

function aumentar() {

    numero++
    mostrarNaTela()

}

function diminuir() {

    numero--
    mostrarNaTela()

}
function zerar() {

    numero=0
    mostrarNaTela()

}


function mostrarNaTela() {

    const p = document.querySelector("#resultado")
    p.innerText = numero

}
