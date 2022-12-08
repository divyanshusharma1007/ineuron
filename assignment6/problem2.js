
console.log(require('readline-sync').question("Enter the values in array ").split(" ").map(e=>Number.parseInt(e)).sort((a,b)=>b-a)[Number.parseInt(require('readline-sync').question("enter the index :"))-1]);
