"use strict";
const data="use strict";
console.log('full string',data.toUpperCase())
console.log('First letter only',data.toLocaleUpperCase())
console.log('Lower case',data.toLowerCase())
console.log('string divided by 2 and words are swaped ',data.slice(data.length/2,data.length)+data.slice(0,data.length/2))


// next problem 
const values={}
const stringSet=new Array(...new Set(data.split('')))
for (let i in stringSet ){
    values[stringSet[i]]=new Array(...data.matchAll(stringSet[i])).length;
}
for (let i in stringSet){
    if(values[stringSet[i]]>1){
        console.log(values[stringSet[i]],stringSet[i])
    }
}
// next problem 
console.log('reverse of the string ',data.split('').reverse().join(''))