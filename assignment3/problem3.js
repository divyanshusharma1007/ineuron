"use strict"
const readline = require('readline-sync')
const a = readline.question("Enter the value")
const facts = []
const factorial = (n) => {
    let fact = 1;
    for (var i = n; i > 0; i--) {
        fact *= i;
    }
    return fact
}


for (let i in a) {
    facts.push(factorial(a[i]))
}
console.log(facts.reduce((a,b)=>a+b))
facts.reduce((a,b)=>a+b)==a?console.log(`${a} is spacial  number`):console.log(`${a} is not special number`)