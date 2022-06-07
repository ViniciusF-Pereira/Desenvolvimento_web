console.log("");
console.log("");
console.log("");
console.log("");

function returnEvenValue(array) {
    let eventNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            eventNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`);
        }
    }
    console.log("Os numeros pares são ", eventNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValue(array);


console.log("");
console.log("");
console.log("");