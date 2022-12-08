"use strict"
const readline = require('readline-sync')
class Rectangle {
    constructor(length, width) {
        this.l = length;
        this.b = width;
    }
    area() {
        console.log(this?.l * this?.b, "this is the area ")
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
const data = new Square(readline.prompt())
data.area()
