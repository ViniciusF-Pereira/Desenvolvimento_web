console.log("//----------------------------------------------------------------");
console.log("//                     1 - numbers");
console.log("//________________________________________________________________");
// 1 - numbers
var x = 10;
var y = 25;
var z = 15.8885;
console.log(x);
console.log(x + y);
console.log(z.toPrecision(2));
console.log("//----------------------------------------------------------------");
console.log("//                     2 - string    ");
console.log("//________________________________________________________________");
// 2 - string
var fullname;
var firstname = "vinicius";
var lasttname = "freitas";
console.log(firstname.toUpperCase());
fullname = firstname + " " + lasttname;
console.log(fullname.toUpperCase());
console.log(typeof (fullname));
console.log("//----------------------------------------------------------------");
console.log("//                  3 - bolean");
console.log("//________________________________________________________________");
// 3 - bolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
console.log("//----------------------------------------------------------------");
console.log("//                 4 - Inference e anotation   ");
console.log("//________________________________________________________________");
// 4 - Inference e anotation
var ann = "teste";
var inf = "teste";
//an = 1
//inf = 1 
console.log(inf);
var counter = 0;
var timer = setInterval(function () {
    if (counter >= 101) {
        clearInterval(timer);
    }
    console.log(counter++);
}, 450);
