const data = require('readline-sync').question("Enter any string : ")
console.log(data.length>=4?data.substring(0,4)+"...":data)