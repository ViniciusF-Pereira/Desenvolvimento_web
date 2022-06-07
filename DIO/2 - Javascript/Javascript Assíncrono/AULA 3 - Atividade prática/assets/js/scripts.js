/* const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('changeBtn');
const imgBt = document.getElementById('imgBtn');


const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl; // e oque eu quero a imagem do base url
    } catch (e) { // se der um eror a gente log ela.
        console.log(e.message);
    }

}

const loadImg = async() => {
    imgBt.src = await getCats();


}

btn.addEventListener('click', loadImg);

loadImg();

*/


const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('changeBtn');
const imgBt = document.getElementById('imgBtn');


const getCats = async() => {

    const data = await fetch(BASE_URL)
        .then((res) => res.json()) // fica esperto que nesse metodo ; não é nescessario
        .catch((e) => console.log(e))





    return data.webpurl; // e oque eu quero a imagem do base url


}

const loadImg = async() => {
    imgBt.src = await getCats();


}

btn.addEventListener('click', loadImg);

loadImg();