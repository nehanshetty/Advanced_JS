/*PURE FUNCTIONS
We can replace the function with output, this is called Referential Transparency
same input always gives the same output
a pure function should have atleast one parameter
accessing the scopr outside the function is not a pure function
pure function cannot access a database, API, file system, storage,modify the dom, cannot log to the consol
*/

const add=(x,y)=> x+y;
console.log(add(1,3));

const N1 = (finame, laname)=>`${finame} ${laname}`;
console.log(N1("kuamr","Anand"));