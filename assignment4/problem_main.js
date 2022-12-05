"use strict"
const readline = require('readline-sync')
const a = Number(readline.question("Enter the Number of houses"))
console.log(a===1?6:(a*6)-a+1)

