"use strict"
const readline = require('readline-sync')

class Shape{
    getVolume(){
        throw new Error("implement the function in the shape")
    }
}
class Cylinder extends Shape{
    constructor(radius,height){
        this.r = radius;
        this.h = height;
    }
    getVolume(){
        return (Math.PI)*(this.r**2)*(this.h)
    }
}
class Sphere{
    constructor(radius){
        this.r = radius;
    }
    getVolume(){
        return (4/3)*Math.PI*(this.r**3)
    }
}
class Cone{
    constructor(radius,height){
        this.r = radius;
        this.h = height;
    }
    getVolume(){
        return Math.PI*(this.r**2)*(this.h)/3
    }
}
const a=new Cone(Number(readline.question("Enter the Radius")),Number(readline.question("Enter the Height")))
console.log(a.getVolume())
const b=new Sphere(Number(readline.question("Enter the Radius")))
console.log(b.getVolume())
const c=new  Cylinder(Number(readline.question("Enter the Radius")),Number(readline.question("Enter the Height")))
console.log(c.getVolume())