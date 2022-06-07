// 1 - numebers


let x: number = 10
let y: number = 25

const z: number = 15.8885
console.log(x)

console.log(x + y)

console.log(z.toPrecision(2))

// 2 - string

let fullname:string

const firstname: string = "vinicius"
const lasttname: string = "freitas"


console.log(firstname.toUpperCase())

fullname = firstname + " " + lasttname

console.log(fullname.toUpperCase())

console.log(typeof(fullname))


// 3 - bolean

let a:boolean = false

console.log(a)
console.log(typeof a)

a = true


console.log(a)


// 4 - Inference e anotation

let ann: string = "teste"
let inf = "teste"
//an = 1
//inf = 1 

console.log(inf)

var counter = 0;
var timer = setInterval(function() {
    if (counter >= 101) {
        clearInterval(timer);
    }
      console.log(counter++);
}, 450)