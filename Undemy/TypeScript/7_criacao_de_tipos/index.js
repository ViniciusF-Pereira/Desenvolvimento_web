"use strict";
console.log("//             1 - generics");
console.log("");
//          1 -generics
function showData(arg) {
    return `o dado emitido é: ${arg}`;
}
console.log(showData(5));
console.log("");
console.log(showData("CINCO"));
console.log("");
console.log("//             2 - Constraints em generics");
console.log("");
//          2 - Constraints em generics
function showProductName(obj) {
    return `o objeto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const myObj2 = { preco: "32,99", name: "Martelo" };
console.log(showProductName(myObj));
console.log(showProductName(myObj2));
function showMeuPendrive(obj) {
    if (obj.tamanho == "pequeno" || obj.tamanho == "4GB" || obj.tamanho == "8GB" || obj.tamanho == "16GB" || obj.tamanho == "32GB") {
        return `o espaço no pendrive é pequeno, com espaço de ${obj.tamanho}}`;
    }
    else if (obj.tamanho == "grande" || obj.tamanho == "64GB" || obj.tamanho == "128GB" || obj.tamanho == "256GB") {
        return `o espaço no pendrive é grande, com espaço de ${obj.tamanho}`;
    }
    else {
        return `os dados inseridos sobre o pendrive estão errados, ${obj.tamanho} está na sintaxe errada`;
    }
}
console.log("");
let espaço = "64GB";
const myPendrive = { tamanho: espaço, marca: "kingston" };
const myPendrive2 = { tamanho: "16GB", marca: "kingston" };
const myPendrive3 = { tamanho: "162GB", marca: "kingston" };
console.log(showMeuPendrive(myPendrive));
console.log("");
console.log(showMeuPendrive(myPendrive2));
console.log("");
console.log(showMeuPendrive(myPendrive3));
console.log("");
console.log("");
console.log("//             3 - generics com interfaces");
console.log("");
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "branco" };
const myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
console.log("");
console.log("//            4- type parameters");
console.log("");
//           4- type parameters
function getSomeKey(obj, key) {
    return `a chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}
`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, 'ram'));
console.log("");
console.log("//            5- key of type operator");
console.log("");
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = { name: "Vinicius", age: 24, hasDriveLicense: false };
console.log(showCharName(myChar, "age"));
console.log("");
console.log("//            6- typeOf operator");
console.log("");
//           6- typeOf operator
const usernames = "vinicius";
const usernames2 = "jose";
const usernames4 = "joaquim";
console.log(usernames4);
console.log("");
console.log("//            7 - index acess type");
console.log("");
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "caminhão com pouca carga"
};
function showKm(km) {
    console.log(`o veiculo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
console.log("");
console.log("//            8 - condicional types");
console.log("");
const someVar = 5;
console.log("");
console.log("//            9 - templeates literals type");
console.log("");
const testing = "some text";
const CustomType2 = a3;
