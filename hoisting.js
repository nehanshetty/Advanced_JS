//console.log(x); //ReferenceError: Cannot access 'x' before initialization

let x=5;

//declarations are hoised and initialization are not

example(); //step one
function example(){
    console.log("Step one");
}

//hoisting in arrow fun
a();//ReferenceError: Cannot access 'a' before initialization
const a = ()=>{
    console.log("Successful");
}

