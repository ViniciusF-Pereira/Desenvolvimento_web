/*Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.*/

const myArray =  [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log('\n Array com valor [8]\n   [30, 30, 40, 5, 223, 2049, 3034, 5]\n     1   2   3   4   5   6     7    8\n')
console.log((myArray));

function valorUnico(arr) {

    const mySet = new Set(arr);
    return [...mySet];
  
}

console.log('\n Array com valor [6]\n   [30, 40, 5, 223, 2049, 3034]\n      1   2   3    4   5     6\n');
console.log(valorUnico(myArray));




