console.log("//             1 - campos em classe");
console.log("")
//         1 - campos em classe

class User {
    name!: string;
    age!: number
}

const vinicius = new User();

console.log(vinicius)

vinicius.name = "vinicius";
vinicius.age = 24;

console.log(vinicius)


console.log("")
console.log("//            2 - constructor");
console.log("")
//              2 - constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const Vitor = new NewUser("Vitor", 22);

console.log(Vitor)

console.log("")
console.log("//            3 - Campos readOnly");
console.log("")
//                3 - Campos readOnly

class Car {
    name
    readonly wheels = 4
    constructor (name: string){
        this.name = name;
    }
}

const HB20 = new Car("HB20")

console.log(HB20)

HB20.name = "HB20 TURBO"

console.log(HB20)

console.log("")
console.log("//           4 - herança e super");
console.log("")
//                4 - herança e super

class Machine {
    name

    constructor (name: string){
        this.name = name;   
    }
}

const trator = new Machine("trator")

class LoveMachine extends Machine  {
    supernany: boolean
    constructor (name: string){
    super(name)
    this.supernany  = true
     }

    readonly love = ["Abraços", "Afeto", "Atenção"]
}

const BabaRobotica = new LoveMachine("Babá Robotica")

console.log(trator)
console.log(BabaRobotica.name)

console.log("")
console.log("//           5 - Metodos");
console.log("")
//                5 - Metodos

class Dwarf {
    name

    constructor (name: string){
    this.name = name;
    
    }

    greeting(){
        console.log (" Hey Stranger!")
    }
}


const Jimmy = new Dwarf("Jimmy")

console.log(Jimmy.name)

Jimmy.greeting()

console.log(Jimmy)


console.log("")
console.log("//           6 - O this");
console.log("")
//                6 - O this


class Caminhão  {
    model
    hp

    constructor(model:string, hp: number){
        this.model = model;
        this.hp = hp;
    }
    showDetails(){
        console.log (`Caminhão do modelo: ${this.model} tem ${this.hp} de Potencia`)
        console.log ("Caminhão do modelo: " + this.model + " tem " + this.hp + " de HP")
    }
}

const Volvo = new Caminhão("Volvo", 200)
const Scania = new Caminhão("Scania", 500)

Volvo.showDetails()
Scania.showDetails()



console.log("")
console.log("//           7 - Os Getters");
console.log("")
//                7 - Os Getters

class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + " de " + this.surname
    }
}


const Vinicius = new Person ("Vinicius", "Freitas")


console.log(Vinicius.name)
console.log(Vinicius.surname)

console.log(Vinicius.fullname)

console.log("")

console.log(Vinicius)


console.log("")
console.log("//           8 - Os Setters");
console.log("")
//                8 - Os Setters


class Coords {
    X!:number
    Y!:number

    set fill__X(X: number){
        if( X === 0 ){
            return
        }

        this.X = X;

        console.log(`X inserido com sucesso: ${this.X}`)
    }
    
    set fill__Y(Y: number){
        if( Y === 0 ){
            return
        }

        this.Y = Y;

        console.log(`Y inserido com sucesso: ${this.Y}`)
    }

    get get__Coords() {
        return `X: ${this.X} Y: ${this.Y}`
    }
}

const myCoords = new Coords

myCoords.fill__X = 12
myCoords.fill__Y = 15

console.log(myCoords.get__Coords)

console.log("")
console.log("//           9 - Herança e Interfaces");
console.log("")
//                9 - Herança e Interfaces

interface Show__Title {
    item_Tittle() : string
}

class Blog__Post implements Show__Title {

    Title

    constructor(Title: string) {
        this.Title = Title
    }

    item_Tittle(){
        return `O titulo do post é ${this.Title}`
    }
}

const my__post = new Blog__Post("hELLO WORLD!")

console.log(my__post.item_Tittle())

console.log(my__post)


class Testing__Interface implements Show__Title {
   
    Title

    constructor(Title: string) {
        this.Title = Title
    }

    item_Tittle(){
        return `O titulo é ${this.Title}`
    }
}

const my__post2 = new Testing__Interface("Testando ")

console.log(my__post2.item_Tittle())


console.log("")
console.log("//           10 - Os Overrides");
console.log("")
//                10 - Os Overrides


class Base {
    Some__Method() {
        console.log ("Alguma coisa")
    }
}

class Nova extends Base { 
    Some__Method() {
        console.log ("Testando alguma coisa")
    }

}

const my__Object = new Nova()

my__Object.Some__Method()


class Human {
    name
    surname
    job

    age

    constructor (name: string, surname: string, job: string, age: number) {
    this.name = name
    this.surname = surname
    this.job = job
    
    this.age = age 

    }
    

    Some__Method() {
        console.log (`${this.name} ${this.surname} tem ${this.age} anos e trabalha de ${this.job}`)
    }
}

class Super__Human extends Human { 

    poderes
    super_hero__name


    constructor (name: string, surname: string, job: string, age: number, 
        poderes: string[],     super_hero__name: string) {
        super(name, surname, job, age)

        this.poderes = poderes
        this.super_hero__name = super_hero__name


    }
    Some__Method() {
        console.log (`O Super Heroi ${this.super_hero__name} tem os poderes de ${this.poderes}`)
    }

}

const Vinicius__Human = new Human("Vinicius", "Freitas", "Recepcionista", 24)

const Super__Hero__Ketchup_Man = {
    poderes : ["Voar", "Super-Força", "Super-Resistencia", "Poderes sobre o ketchup"],
    super_hero__name :"Kecthup-Man"
}

const Vinicius__Hero = new Super__Human( 

    Vinicius__Human.name,
    Vinicius__Human.surname,
    Vinicius__Human.job,
    Vinicius__Human.age,
    Super__Hero__Ketchup_Man.poderes,
    Super__Hero__Ketchup_Man.super_hero__name)

Vinicius__Human.Some__Method()
Vinicius__Hero.Some__Method()



console.log("")
console.log("//           11 - Os public");
console.log("")
//                11 - Os public

class C {

    x = 10
}

class D extends C {
}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)


console.log("")
console.log("//           12 - Os protected");
console.log("")
//                12 - Os protected

class E {
    protected x = 10

    protected protectedMethod () {

        console.log("this method is protected")
    }
}

class F extends E {

    showX() {
        console.log("X: " + this.x)
    }
    showprotectMethod() {
        this.protectedMethod()
    }
}


const fInstance = new F()

fInstance.showX()

fInstance.showprotectMethod()

console.log("")
console.log("//           13 - Os private");
console.log("")
//                13 - Os private

class PrivateClass {

    private name = "Vinicius"
    
    showName() {
        return this.name
    }

    private privateMethod() {
        console.log ("this method is private " + this.name)
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}


const pObj = new PrivateClass()

console.log(pObj.showName())

pObj.showPrivateMethod()

class TestPrivate extends PrivateClass  {
       myMethod(){
        pObj.showPrivateMethod()
        return `aqui foi usado a class extends e puxar o resultado da quebra de privado da classe que foi copiada e seus valores.`
       }
}

const testObjt = new TestPrivate()

testObjt.myMethod()



console.log("")
console.log("//           14 - Os statics member");
console.log("")
//                14 - Os statics member

class staticMembers {
    static  prop = "teste statics"
    static staticMethods(){
        console.log(  `isso é um ${this.prop}`)
    }
}

console.log(staticMembers.prop)

staticMembers.staticMethods()

console.log("")
console.log("//           15 - Os generics class");
console.log("")
//                15 - Os generics class

class Item<T, U> {

    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }

     showFirst() { return `o first é ${this.first}` }

}

const newItem = new Item ('CAIXA', 'SURPRESA')

console.log(newItem)

console.log(typeof newItem)

console.log("")

console.log(newItem.showFirst())

console.log(typeof newItem.showFirst())

console.log("")
console.log("//           16 - Os Parameters properties");
console.log("")
//                16 - Os Parameters properties

class ParametersProperties {

    constructor (

        public name: string, 
        private qty: number, 
        private price : number

     ) {

        this.name = name
        this.qty = qty
        this.price = price

    }

    get showQty() { return  `A quantidade é : ${this.qty}` }
    get showPrice() { return `O preço é : ${this.price}` }
}

const myPants = new ParametersProperties("My Pants", 4, 29.55)

console.log(myPants.name)
console.log(myPants.showQty)
console.log(myPants.showPrice)

console.log("")
console.log("//           17 - Os Class Expresions");
console.log("")
//                17 - Os Class Expresions

const my__Class = class <T> {
    name

    constructor(name: T){
        this.name = name
    }
}

const pessoa = new my__Class("Arthur")

console.log(pessoa)
console.log(pessoa.name)

console.log("")
console.log("//           18 - Abstract class");
console.log("")
//                18 - Abstract class

abstract class AbstractClass {
    abstract showName():void
}

class newAbstractClass extends AbstractClass {
    name:string

    constructor(name:   string) {
        super()
        this.name = name
    }
    showName() {
        console.log(this.name)
    }
}
const newObjt = new newAbstractClass("josias")

newObjt.showName()

console.log("")
console.log("//           19 - relações entre class");
console.log("")
//                19 - relações entre class

class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)