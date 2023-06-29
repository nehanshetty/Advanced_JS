/*JS Prototype, prototype chaining

no circular reference allowed

the __proto__ value must be an object or null

An object can only directly inherit from one object

*/
const person ={
    alive: true
 }

 const musician ={
    plays: true
 }
 /*musician.__proto__ = person;
 console.log(musician.plays);
 console.log(musician.alive);
 console.log(musician);*/

 // new way

 Object.setPrototypeOf(musician, person);
 console.log(Object.getPrototypeOf(musician));
 console.log(Object.getPrototypeOf(musician) === musician.__proto__);

 const guitarist ={
    strings : 6,
    __proto__:musician
 }
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

// getter and setter method

const car ={
    door:4,
    seats: "vinyl",
    get seatMaterial(){
        return this.seats;
    },
    set seatMaterial(material){
        this.seats=material;
    }
}

const luxCar ={};
Object.setPrototypeOf(luxCar, car)
console.log(luxCar.seatMaterial);
luxCar.seatMaterial="leather";
console.log(luxCar.seatMaterial);
console.log(luxCar);
//getting the value of an object
console.log(luxCar.valueOf());//Object { seats: "leather" }

//getting the keys of an object
console.log(Object.keys(luxCar));//Array [ "seats" ]

// loop through each key

Object.keys(luxCar).forEach((k)=>{
    console.log(k); //seats
})

// using for in includes inherited properties

for (let k in luxCar){
    console.log(k); //seats door seatMaterial
}

// Object Constructors

function Animal(species){
    this.species=species;
    this.eat = true;
}
Animal.prototype.walks = function (){
    return `A ${this.species} is walking`;
}

const Bear = new Animal('Bear');
console.log(Bear);//Object { species: "Bear", eat: true }
console.log(Bear.walks()); //A Bear is walking
console.log(Bear.__proto__);//Object { walks: walks(), … }

//ES6 Classes inheritance example

class Vehicle{
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }
    ready() {
        return "Ready to go";
    }
}

class Motorcycle extends Vehicle {
    constructor () {
        super();
        this.wheels = 2
    }
    wheelie() {
        return "On one wheel";
    }
}

const myBike = new Motorcycle();
console.log(myBike);//Object { wheels: 2, motorized: true }
console.log(myBike.ready());//Ready to go
console.log(myBike.wheelie());//On one wheel