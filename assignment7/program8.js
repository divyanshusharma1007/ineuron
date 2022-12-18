// making the functions 
const readline = require('readline-sync').question;
// type casting the function console.log() into the print 
const print = console.log;
"use strict";
const  verify=(data)=>{
    if (data[0] == data[0].toLowerCase()) {
        print("has lower case")
    } else {
        print("not in lower case ");
    }
}
verify(readline("Enter the string "));