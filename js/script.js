var res = document.getElementById("res")

function insert(num) {
    res.innerHTML += num
}

function limpar() {
    res.innerHTML = ""
}

function apagar() {
    let resultado = res.innerHTML
    res.innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = res.innerHTML
    if (resultado) {
        res.innerHTML = eval(resultado)
    } else {
        alert("Nada para calcular")
    }
}