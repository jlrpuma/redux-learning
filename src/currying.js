// normal add function
function add(a,b) {
    return a + b;
}


// FP Currying  (Haskell)
// using arrow functions
const add = a => b => a + b;
add(1)(2)
// using functions
function add(a) {
    return function(b) {
        return a + b;
    }
}
add(1)(2)
