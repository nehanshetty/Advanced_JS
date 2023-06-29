// DECORATOR FUNCTIONS

let Area = (l, w) => {
    return l * w;
}

// A decorator for counting parameter
const count= (fn) => {
    return (...params) => {
        console.log('count')
        if (params.l !== fn.l) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

// A decorator that requires integers
const requireIntegers = (fn) => {
    return (...params) => {
        console.log('requireIntegers')
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params must be integers`);
            }
        });
        return fn(...params);
    }
}


Area = count(Area);

Area = requireIntegers(Area);

//console.log(rectangleArea(20, 50, "aabc")) //integers error
//console.log(rectangleArea(80, 30, 40)); //number of parameters error
console.log(Area(90, 70)); //no error