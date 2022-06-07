var firstname = "vinicius";
var anotherName = 1;
var x = true;
function greeting(name) {
    console.log("ol\u00E1 ".concat(name));
}
greeting(firstname);
greeting(anotherName);
greeting(x);
