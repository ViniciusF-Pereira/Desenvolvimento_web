/*async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 3000);
    });


    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message))
    return resolved;

}
*/

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 3000);
    });


    let result;
    try {
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
    } catch (err) {
        result = err.message;
    }
    return result;



}
console.log('---------------------------------------');
for (var i = 1; i <= 5; i++) {
    console.log('|                                    |');
}
console.log('---------------------------------------');
//TODO: Complete os espaços em branco com uma possível solução para o desafio