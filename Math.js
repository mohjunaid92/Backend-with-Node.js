const sum = ( a,b) => a+b;
const PI = 3.14;
const mul = ( a, b) => a*b;
const g = 9.10;

module.exports= {
    sum : sum,
    PI : PI,
    mul : mul, 
    g : g
}

const fruits = require("./Fruits");

console.log(fruits);