"use strict";
console.log("//             1 - type guard");
console.log("");
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseInt(a) + parseInt(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        console.log(parseInt(a) + b);
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        console.log(a + parseInt(b));
    }
}
sum(4, 3);
sum("4", "8");
sum("5", 2);
console.log("");
console.log("//             2 - checando se valores existem");
console.log("");
// 2 -  checando se valores existem
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor defina uma opperação...");
    }
}
operations([1, 2, 3], "");
operations([1, 2, 3], "sum");
operations([1, 2, 3], "multiply");
console.log("");
console.log("//             3 - instance of");
console.log("");
// 3 -  instance of
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class superUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("jhon");
const vinicius = new superUser("vinicius");
console.log(jhon);
console.log(vinicius);
function userGreatings(user) {
    if (user instanceof superUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreatings(jhon);
userGreatings(vinicius);
console.log("");
console.log("//             4 - Operator in");
console.log("");
//  4 - Operator in
class Dog {
    name;
    breed;
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const tuca = new Dog("Tuca");
const bob = new Dog("Bob", "Golden Reetriver");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O Cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`o cachorro é um SRD`);
    }
}
showDogDetails(tuca);
showDogDetails(bob);
