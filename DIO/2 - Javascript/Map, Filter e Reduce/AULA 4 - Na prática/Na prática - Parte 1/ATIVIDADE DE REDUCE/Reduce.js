const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function somaNums(arr) {
    return arr.reduce(function(prev, current) {
        console.log("Sintaxe = ", (prev), "+", (current), "=", (prev + current));
        return prev + current;

    });

}

console.log(somaNums(arr));


const lista = [{
    name: 'sabao em po',
    preco: 30
}, {
    name: 'cereal',
    preco: 12
}, {
    name: 'toalha',
    preco: 30
}];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', (index + 1))
        console.log((prev))
        console.log((current))
        return prev - current.preco;
    }, saldoDisponivel);
};

console.log(calcularSaldo(saldoDisponivel, lista));