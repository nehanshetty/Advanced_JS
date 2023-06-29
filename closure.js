// lexical scope : defines how variable names are resolved in nested function.


let x =1; 

const parentFunction=()=>{
    let y =2;
    console.log(x);
    console.log(y);
    const childFun=()=>{
        console.log( x += 10 );
        console.log( y *=5 );
    }
    childFun();
}
parentFunction();

// closure scope: closure is a function having access to parent scope even after the parent function has closed

//example 1

let x1 =1; 

const parentFun=()=>{
    let y1 =2;
    console.log(x1);
    console.log(y1);
    const childFunction=()=>{
        console.log( x1 += 10 );
        console.log( y1 *=5 );
    }
    return childFunction;
}
const res=parentFun();
console.log(res); //function childFunction()
res();
console.log(x);//11
//console.log(y);// reference error, y is a private variable as the parent function is closed

/*IIFE (Immediately Invoked Function Expression)
const a = (()=>{

}
)();
*/

// closure example 2 
const privateCounter = (() =>{
    let count =0;
    console.log(`Initial Counter ${count}`);
    return ()=>{count +=1; console.log(count)}
 
})();

privateCounter();

// closure example 3

const credits = ((num) =>{
    let credits = num;
    console.log(`initial credit ${credits}`);
    return ()=>{
        credits-=1;
        if(credits> 0) console.log(`playing game, ${credits} credit(s) remaining`);
        if (credits<=0) console.log(`Not enough credits`);
    }
})(3);

credits();
credits();
credits();