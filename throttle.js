const initapp=()=>
{
    const button=document.getElementById("btn1");
    button.addEventListener('click',throttle(clicklog1,2000));
}

document.addEventListener("DOMContentLoaded",initapp)

const clicklog1=()=>console.log("clicked");

const throttle=(fn,delay)=>
{
 let lastime=0;
 console.log("Called throttle");
 let id=0;
  return (...args)=>{
    id++;
    console.log(`event id ${id}`);
    const now=new Date().getTime();
    if((now-lastime)<delay) return;
    lastime=now;
    fn(...args)

  }
}