const one = ()=>{
    return "one";
};

const two = ()=>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('two');
    },3000);
   });
};
const three = ()=>{
    return "three";
};

const call = async() => {
    let v1=one();
    console.log(v1);
    let v2= await two();
    console.log(v2);
    let v3=three();
    console.log(v3);
}
call();