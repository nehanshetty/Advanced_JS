//Template String or Template literals ``
let firstName="Fisrt";
let lastName= "Last";

function fullname(fname, lname){
    return `${firstName} ${lastName}`;
}
 let greet = `Hello ${fullname(firstName,lastName)}`;
 //document.write(greet);

//Rest Operator ... converts remaining set of  values into an array. used during function declaration.
function sum(operation, ...args){
    let sum =0;
    for(let i in args){
        sum += args[i];
    }
    console.log(`${operation}, ${sum}`);
}

sum("Addition", 20,30,40,50);

//spread operator : used in function call to pass an array as an argument
var a = [10,20,3,0];
console.log(...a);
console.log([...a]); 
var b = [5,8];
var c = [...a, ...b]; //concat
console.log(c);

var d = { name: "abc"};
var e = {age :35};
var f ={...d, ...e};
console.log(f);

function multiply(operation, ...args){ // rest operator
    let multiply =1;
    for(let j in args){
        multiply *= args[j];
    }
    console.log(`${operation}, ${multiply}`);
}
 var ar =[20,30,40,50];
multiply("Multiplication", ...ar); //spread operator

//object Literal : when property and values name are same, write once

let Name ="abc";
let course = "Btech";

var obj = {
    Name, 
    course,
}

console.log(obj);

// using variable name as property using []
let n = "student";
var c = {
    [n] : "def",
    course : "BCom",
    detail : function(){
        return `${this.student} is student of ${course} course`;
    }
}
console.log(c); //Object { student: "def", course: "BCom"}
console.log(c.detail()); //def is student of Btech course

// Object Literal (New function syntax)

var obj = {
    name: "abcsdsdde",
    show(){
        console.log(this.name);
    }
}
console.log(obj.show());
console.log(obj['show']());//another way


//Destructuring Array

let user = ["kumar", 30, "Delhi", [20125], "India","Hindi"];
let [fName, age=20, city, [salary], ...args] = user; //age =20 setting default value 
console.log(fName);
console.log(age);
console.log(city);
console.log(salary);
console.log(...args);


function user1([n , a =30, c]){
    console.log(n);
    console.log(a);
    console.log(c);
}
user1(["kavan","25","Kerala"]);


//Destructuring Object
 let user2 ={
    Fn: "karan",
    age: 35
 }

 let {Fn : N}= user2;
 console.log(N
    );

/*Modules
export and import functions

export 

import {} from 'filename';

to include the file in HTMl file 

<script type ="module" src=""></script>

*/







