var nrImagem = 0;
var imagens = [];
var refrescar = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "img/insta-tela1.png";
imagens[1] = "img/insta-tela2.png";
imagens[2] = "img/insta-tela3.png";
imagens[3] = "img/insta-tela4.png";

const Troca = document.getElementById("celularzao");

function rodarImagens() {
    Troca.src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagens()", refrescar * 2000);
}



rodarImagens();