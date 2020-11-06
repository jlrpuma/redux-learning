/*
minAge is not defined in this function as a constant so 
it can be a global variable, given this fact
this function can be categorized as a non pure function
because the result can mutate ....
*/
function isElegible(age) {
    return age > minAge;   
}


/*
Pure Function
the function result is always the same 
based on the premise that the arguments that are being used to 
perform the calculation are always given by the arguments that 
were sent to the function, in that way this function 
can be categorized as a Pure Function

*/
function isElegible(age, minAge) {
    return age > minAge;   
}
