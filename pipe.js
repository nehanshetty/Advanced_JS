


const add2=(x)=>x+2;
const multiply=(x)=>x*2;
const res = multiply(add2(5)); //composed function

/* Compose function(uses reduceRight) and pipe function(users reduce) */

const compose = (...fns)=> val => fns.reduceRight((prev, fn)=>fn(prev),val);

const comres = compose(multiply,add2)(6);
console.log(comres);

const pipe = (...fns)=> val => fns.reduce((prev, fn)=>fn(prev),val);
const piperes = pipe(add2,multiply)(9);
console.log(piperes);

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum molestiae
                provident. Magnam autem, ex, a eum quam, doloremque illo pariatur modi
                reprehenderit illum cupiditate consectetur. Molestias veniam deserunt
                accusantium dicta vero voluptates minus est aut sint deleniti debitis
                similique quae ipsam error tempore nesciunt quos, iusto perferendis quaerat
                ducimus`;
            
const splitonspace =(string)=> string.split(" ");
const count = (array)=>array.length;
const word = pipe(
    splitonspace,
    count
);
console.log(word(lorem));
