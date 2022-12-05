"use strict"
const readline=require('readline-sync')
let a=readline.question("Enter the value");
let cubes=[];
for (let i in a){
    cubes.push(a[i]**3);
}

cubes.reduce((a,b)=>a+b)===a?console.log(`${a} is Armstrong number`):console.log(`${a} is not Armstrong number`)