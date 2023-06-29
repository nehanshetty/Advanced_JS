//RECURSION

const countToTen = (num = 1) => {
    while(num <= 5) {
        console.log(num);
        num++;
    }
}
countToTen();

//recursive
const recur = (num = 1) => {
    if(num > 5) return;
    console.log(num);
    num++;
    recur(num);
    
}
recur();

//Fibonacci sequence
//0,1,2,3,5,8,...
// without recursion
const fibonacci = (num, array=[0,1]) =>{
    while ( num>2 ){
        const [nextToLast, last] =array.slice(-2);
        array.push(nextToLast+last);
        num -= 1;
    }
    return array;
}
console.log(fibonacci(10));

// recursive
const fib = (num, array=[0,1]) =>{
   if ( num<=2 ) return array;
        const [nextToLast, last] =array.slice(-2);
        return fib(num-1, [...array, nextToLast+last]);
}
console.log(fib(10));

//returning the nth position of the fibonacci series

const fibonacciPos = (pos) => {
    if(pos <=1) return pos;
    const seq = [0,1];
    for (let i=2; i<=pos; i++){
        const [nextToLast, last]= seq.slice(-2);
        seq.push(nextToLast+last);
    }
    return seq[pos];
}

console.log(fibonacciPos(8));

// with recursion
const fibPos = (pos) =>{
    if( pos< 2) return pos;
    return( fibPos(pos-1)+ fibPos(pos-2));
}

// const fibPos = pos =>pos<2 ? pos  : fibPos(pos-1)+ fibPos(pos-2);
console.log(fibPos(7));














