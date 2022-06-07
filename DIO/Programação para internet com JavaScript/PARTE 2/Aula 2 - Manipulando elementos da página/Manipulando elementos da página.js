function clicou() {
    alert("obrigado por clicar");
    document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar";
    console.log( document.getElementById("agradecimento"));
    
}
function redirecionar(){
    alert("obrigado por clicar, voce será redirecionado ao curso");
    window.open("https://web.dio.me/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d?back=/track/html-web-developer&tab=undefined&moduleId=undefined");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar, site da DIO";
}


function trocaClasseVerde() {
    let el = document.getElementById('caixa');
    el.classList.remove('azul');
    el.classList.remove('branca');
    el.classList.add('verde');
   
}
function trocaClasseAzul() {
    let el = document.getElementById('caixa');
    el.classList.remove('verde');
    el.classList.remove('branca');
    el.classList.add('azul');
   
}
function trocaClasseBranca() {

    let el = document.getElementById('caixa');
    el.classList.remove('verde');
    el.classList.remove('azul');
    el.classList.add('branca');
   
}


