console.log("//             1 - generics");
console.log("")
//          1 -generics


function showData<T>(arg: T): string {
    return `o dado emitido é: ${arg}`
    
}

console.log(showData(5))
console.log("")
console.log(showData("CINCO"))

console.log("");
console.log("//             2 - Constraints em generics");
console.log("");
//          2 - Constraints em generics

function showProductName < T extends { name: string } > (obj: T) {
    return `o objeto é: ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }
const myObj2 = { preco: "32,99", name: "Martelo" }


console.log(showProductName(myObj))
console.log(showProductName(myObj2))


function showMeuPendrive < T extends { tamanho: string } > (obj: T) {
    if ( obj.tamanho == "pequeno" || obj.tamanho == "4GB"|| obj.tamanho == "8GB"|| obj.tamanho == "16GB" || obj.tamanho == "32GB" ) {
        return `o espaço no pendrive é pequeno, com espaço de ${obj.tamanho}}`
     
    }
    else if  ( obj.tamanho == "grande" || obj.tamanho == "64GB" || obj.tamanho == "128GB" || obj.tamanho == "256GB" ){
    
        return `o espaço no pendrive é grande, com espaço de ${obj.tamanho}`
    }
    else {
        return `os dados inseridos sobre o pendrive estão errados, ${obj.tamanho} está na sintaxe errada`
    }
  
}
console.log("")


let espaço = "64GB"
const myPendrive = { tamanho: espaço, marca: "kingston" }
const myPendrive2 = { tamanho: "16GB", marca: "kingston" }
const myPendrive3 = { tamanho: "162GB", marca: "kingston" }

console.log(showMeuPendrive(myPendrive))
console.log("")

console.log(showMeuPendrive(myPendrive2))
console.log("")

console.log(showMeuPendrive(myPendrive3))
console.log("")


console.log("");
console.log("//             3 - generics com interfaces");
console.log("");
//           3 - generics com interfaces

interface MyObject <T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "branco"}
const myPen: Pen = {name: "Caneta Bic", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(myPen)

console.log("");
console.log("//            4- type parameters");
console.log("");
//           4- type parameters


function getSomeKey < T, k extends keyof T> (obj: T, key: k): string {

    return `a chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}
`}


const server= {
    hd: "2TB",
    ram: "32GB"
}


console.log(getSomeKey(server, 'ram'))


console.log("");
console.log("//            5- key of type operator");
console.log("");
//           5- key of type operator

type character = { name: string, age: number, hasDriveLicense: boolean}

type c = keyof character

function showCharName(obj: character, name: c): string {
    return `${obj[name]}`
}

const myChar: character = {name: "Vinicius", age: 24, hasDriveLicense: false}

console.log(showCharName(myChar, "age"))

console.log("");
console.log("//            6- typeOf operator");
console.log("");
//           6- typeOf operator

const usernames: string = "vinicius"

const usernames2: typeof usernames = "jose"

type x = typeof usernames

const usernames4 = "joaquim"

console.log(usernames4)

console.log("");
console.log("//            7 - index acess type");
console.log("");
//            7 - index acess type


type Truck = {name?: string, km?:number, kg?: number, description?: string}

type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "caminhão com pouca carga"
}

function showKm(km: km){
    console.log(`o veiculo tem a km de ${km}`)
}

showKm(newTruck.km)

type carro = keyof Truck

const newCar = {
    km: 5000,
    kg: 1000
}


showKm(newCar.km)


console.log("");
console.log("//            8 - condicional types");
console.log("");
//        8 - condicional types

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}
type myType = B extends A ? number : string

const someVar:myType = 5

type myTypeB = Teste extends {showNumber(): number } ? string: boolean



console.log("");
console.log("//            9 - templeates literals type");
console.log("");
//       9 - templeates literals type

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "testando"
type a2 = "union"

type a3= `${a1}` | `${a2}`

const CustomType2 = a3