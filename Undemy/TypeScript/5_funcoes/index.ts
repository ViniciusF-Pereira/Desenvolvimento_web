console.log("//             1 - void")
console.log("")
// 1 - void


function withoutReturn(): void{
    console.log("essa função nao tem retorno!")
    // return
}

withoutReturn()

console.log("")
console.log("//             2 - callback")
console.log("")
// 2 - callback

function greeting(name: string){
     return `olá ${name}`
}

function preGreeting( f : (name: string) => string , username:string ){
    console.log("preparando a função")

    const greet = f(username)

    console.log(greet)
    console.log("")
}

preGreeting(greeting, "vinicius")
preGreeting(greeting, "jose")



console.log("")
console.log("//             3 - generic function")
console.log("")
// 3 - generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,4]))
console.log(firstElement(["a","b","c"]))


function mergeObjects <U, T> (obj1: U, obj2: T) {
    return{
    ...obj1,
    ...obj2
    }
}

const newObject = mergeObjects({name:"Vinicius"},{age: 24, job: "Recepcionist"})


console.log(newObject)


console.log("")
console.log("//             4 - constraints")
console.log("")
//   4 - constraints


function biggestNumber<T extends number | string >(a: T, b: T):T {
    let biggest: T

    if(+a > +b){
        biggest = a
    }
    else {
        biggest= b
    }
    return biggest
}

console.log(biggestNumber(5,4))
console.log(biggestNumber("143","4"))




console.log("")
console.log("//             5 - especificar tipo de argumento")
console.log("")
//  5 - especificar tipo de argumento


function mergeArrays<T> (arr1: T[], arr2: T[]){

    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3,143], [5,6,7]))
console.log(mergeArrays<number | string>([1,2,3,143], ["5","6","7"]))




console.log("")
console.log("//             6 - parametros opcionais")
console.log("")
//   6 - parametros opcionais

function motherGreeting(name: string, greet?: string){
    if(greet){
    return `Olá ${greet} ${name}, tudo bem?`
    }

    return `olá ${name}, tudo bem?`
}

console.log(motherGreeting("vinicius"))
console.log(motherGreeting("vinicius", "dr"))

console.log("")
console.log("//             7 - parametros default")
console.log("")
//   7 - parametros default

function somaDefault (n: number, m = 10):number{
    return n+m
}


console.log(somaDefault(10))
console.log(somaDefault(15,12))

console.log("")
console.log("//             8 -  unknown")
console.log("")
//  8 -  unknown

function doSomething(x: unknown){
    if(Array.isArray(x)){
    console.log(x[0])
    }
    else if(typeof x === "number"){
        console.log("X é um numbero")
    }
}

doSomething([1,2,3,4])
doSomething(5)

console.log("")
console.log("//             9 -  never")
console.log("")
//  9 -  never

function neverSoNever(msg: string): never {

    throw new Error(msg)

}

console.log("")
console.log("//             10 -  rest operator")
console.log("")
//  10 -    rest operator

function sumAll(...n: number[]){

    return n.reduce((number, sum) => sum +number)

}

console.log(sumAll(1,2,3,4))
console.log(sumAll(4,5,6,7))



console.log("")
console.log("//             11 -  Destruction")
console.log("")
//    11 -  Destruction

function showProduct ({name, price}: {name: string, price: number} ) :  string {
    return `o nome do produto ${name} e ele custa R$${price}`

}

const shirt = { name: "camisa", price: 25}

console.log(showProduct(shirt))
