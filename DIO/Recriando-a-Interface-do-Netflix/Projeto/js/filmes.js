var troca = [];

troca[0] = "https://www.youtube.com/embed/HcNChX1Ch14";
troca[1] = "https://www.youtube.com/embed/Xea_di3Z9nw";
troca[2] = "https://www.youtube.com/embed/HcNChX1Ch14";
troca[3] = "https://www.youtube.com/embed/vaktM0maq-M";
troca[4] = "https://www.youtube.com/embed/IqefsEorPX8";
troca[5] = "https://www.youtube.com/embed/5KQG8pnUtDc";
troca[6] = "https://www.youtube.com/embed/dY7B_OlIPk4";
troca[7] = "https://www.youtube.com/embed/xrDU1edvAoYA";
troca[8] = "https://www.youtube.com/embed/5coGihPYgzU";
troca[9] = "https://www.youtube.com/embed/6BWTTovpcQk";
troca[10] = "https://www.youtube.com/embed/B-7ZN746aTY";
troca[11] = "https://www.youtube.com/embed/e3xp060t1ls";
troca[12] = "https://www.youtube.com/embed/4olSy5UXO_M";


function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a

}
document.addEventListener('keydown', function(event) {

    const key = event.key;

    switch (event.key) {

        case "ArrowLeft":
            console.log("Left arrow!")
            break;
        case "ArrowRight":
            console.log("Right arrow!")
            trocarVideo();
            break;
        case "ArrowUp":
            console.log("Up arrow!")
            break;
        case "ArrowDown":
            console.log("Down arrow!")
            break;

    }
});

function trocarVideo() {

    var numero = 0;
    numero = troca[numero = randomNumberInterval(0, troca.length)];

    if (document.getElementById("filmao").src === troca[numero = randomNumberInterval(0, troca.length)]) {
        document.getElementById("filmao").src = troca[numero];
        if (document.getElementById("filmao").src != undefined) {
            return
        }

    }
    if (document.getElementById("filmao").src == undefined) {
        document.getElementById("filmao").src = troca[numero + 1];

    }
    document.getElementById("filmao").src = troca[numero];


}
trocarVideo();