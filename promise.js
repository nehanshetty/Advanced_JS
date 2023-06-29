let p = new Promise((resolve, reject)=>{
    let a = 3;
    if(a ===2){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

p.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})


