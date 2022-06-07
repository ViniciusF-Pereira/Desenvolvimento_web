var _aplicativo = {
    contador: document.querySelector(".contador__default"),
    botao: document.querySelector(".btn__iniciar--iniciar")
};
_aplicativo.botao.addEventListener("click", function() {
    _aplicativo.contador.classList.toggle("contador__default--ativo");
    iniciar();
});

function iniciar() {
    var counter = 0;
    var timer = setInterval(function() {
        if (counter >= 101) {
            clearInterval(timer);
        }
        _aplicativo.contador.innerHTML = counter;
        console.log(counter++);
    }, 250);

    _aplicativo.botao.innerHTML = "AGUARDE"
    _aplicativo.botao.classList.toggle(".btn__iniciar--AGUARDE");
}