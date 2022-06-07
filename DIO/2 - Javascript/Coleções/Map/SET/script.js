const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const mySet1  = new Set(myArray);

console.log(mySet1);


console.log("-------------------");
console.log("Outro Set");

const mySet = new Set();

mySet.add(1);
mySet.add(5);

console.log(mySet.delete(5));

console.log(mySet.has(1));

console.log(mySet.has(3));

console.log(mySet);