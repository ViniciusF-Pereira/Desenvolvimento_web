function trocaModo() {
    console.log("cliquei");
    trocaClasses();
    trocaTexto();


}

function trocaClasses() {

    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function trocaTexto() {

    if (button.classList.contains(darkModeClass)) {
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + "ON";
        return;

    }

    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + "ON";
    return;

}

const ligthMode = "Light Mode";
const darkMode = "Dark Mode";

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];




button.addEventListener('click', trocaModo);