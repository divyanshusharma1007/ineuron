"use strict"
const factorial = (n) => {
    let fact = 1;
    for (var i = n; i > 0; i--) {
        fact *= i;
    }
    console.log(`factorial of the ${n} is ` + fact)
}
const prime = (n) => {
    if (n <= 0) return
    for (let i = 2; i < n; i++) {
        if (n % i != 0) {
            factorial(n)
            break;
        }
    }
}
let n=10
for (let i = 1; i < n; i++) {
    prime(i)
}