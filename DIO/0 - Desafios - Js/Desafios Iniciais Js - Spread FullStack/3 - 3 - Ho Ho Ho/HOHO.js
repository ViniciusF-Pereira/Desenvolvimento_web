let numero = 0;
var ho = "";

function hohos(numero) {
    for (var i = 0; i < numero - 1; i++) {
        if (i != numero) {
            ho += "Ho ";
        }

    }
    ho += "Ho!";

    console.log(ho);
}

hohos(10);