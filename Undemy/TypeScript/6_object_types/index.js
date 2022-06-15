"use strict";
console.log("//             1 - tipo de objeto para função com interface");
console.log("");
function showProductDetail(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
    if (product.isAvailable == true) {
        console.log("Produto está disponivel");
    }
    else {
        console.log("Produto não está diosponivel");
    }
}
const shirt = {
    name: "camisa",
    price: 39.99,
    isAvailable: true
};
const calça = {
    name: "calça",
    price: 39.99,
    isAvailable: false
};
showProductDetail(shirt);
console.log("");
showProductDetail(calça);
console.log("");
console.log("//           2 - Propriedade opcional em interface");
console.log("");
function showUserDetails(user) {
    console.log(`O usuario tem o email de ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = { email: "matheus@gmail.com", role: "Admin" };
const u2 = { email: "geovani@uol.com" };
showUserDetails(u1);
console.log("");
showUserDetails(u2);
console.log("");
console.log("//          3 - Propriedade de reandoly");
console.log("");
const fusca = {
    brand: "vini",
    wheels: 4
};
console.log(fusca);
//  fusca.wheels = 5
console.log("");
console.log("//          4 - index signature");
console.log("");
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
console.log("");
console.log("//          5 - extend types interface");
console.log("");
const Goku = {
    name: "Goku",
    age: 28,
    superPowers: ["voar", "super força", "envangelico", "voce matou o kuririn"]
};
console.log(Goku);
//console.log(Vinicius)
console.log("");
console.log("//        6 - intersection types interface");
console.log("");
const Vitoria = {
    name: "Vitoria",
    type: "Fuzil",
    caliber: 21
};
const Vinicius = {
    name: "Vinicius",
    type: "Revolver",
    caliber: 38
};
function showHumanWithGun(name) {
    console.log(`${name.name} carrega um ${name.type} calibre .${name.caliber}`);
    console.log("");
}
showHumanWithGun(Vitoria);
showHumanWithGun(Vinicius);
console.log(Vinicius.caliber);
console.log("");
console.log("//        7 - ReadOnlyArray ");
console.log("");
//         7 - ReadOnlyArray 
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
console.log("");
console.log("//        8 - Tuplas ");
console.log("");
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: FiveNumber = [1,2,3,4,5,6] apenas 5 numeros fonte.
// const myNumberArray: FiveNumber = [1,2,"tres",4,5] apenas 5 numeros : number
console.log(myNumberArray);
const anotherUser = ["Vinicius", 24];
console.log(`${anotherUser[0]} tem ${anotherUser[1]} anos`);
anotherUser[0] = "Vitoria";
anotherUser[1] = 22;
console.log(`${anotherUser[0]} tem ${anotherUser[1]} anos`);
console.log("");
console.log("//        9 - ReadAndOnly Tuplas ");
console.log("");
//             9 - ReadAndOnly Tuplas
function ShowNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log("");
}
ShowNumbers([1, 4]);
function ShowAmantes(Amantes) {
    {
        if (Amantes[0] === "Vinicius") {
            console.log(`${Amantes[0]} ama a ${Amantes[1]} muito mesmo`);
        }
        else {
            console.log(`${Amantes[0]} ama o ${Amantes[1]} muito mesmo`);
        }
    }
    console.log("");
}
ShowAmantes(["Vinicius", "Vitoria"]);
ShowAmantes(["Vitoria", "Vinicius"]);
