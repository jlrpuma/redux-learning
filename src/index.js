// normal approach
let input = "   JavaScript   ";
let output = "<div>" + input + "</div>";


// functional approach
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;

// composition of functions to achieve the same result 
/*

But this allow us to reuse the function trim or wrap at any place of the code

*/
const result = wrapInDiv(trim(input));
