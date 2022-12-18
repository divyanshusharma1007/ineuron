const set=new Set();
for(let i = 0; i <4;i++){
    set.add(Math.floor(Math.random() * 10));
}
console.log(set)
console.log(set.has(Number(require('readline-sync').question("Enter a number"))))