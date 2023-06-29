/*CURRYING FUNCTIONS

takes more than one parameter and breaks it into series of unary(one parameter) functions
*/

const build = (ingredient1) =>{
    return (ingredient2)=>{
        return (ingredient3)=>{
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const sandwich = build("Bacon")("Carrot")("Lettuce");
console.log(sandwich);//Bacon, Carrot, Lettuce

const build2 = ing1 =>ing2 => ing3=> `${ing1}, ${ing2}, ${ing3}`;

const san2 = build2("tomato")("beet")("egg");
console.log(san2);//tomato, beet, egg

const mult = x => y => x * y;
console.log(mult(5)(8)); //40


