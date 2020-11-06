import { wrap } from 'lodash';
import {compose, pipe} from 'lodash/fp'

// normal approach
let input = "   JavaScript   ";
let output = "<div>" + input + "</div>";


// functional approach

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// composition of functions to achieve the same result 
/*
But this allow us to reuse the function trim or wrap at any place of the code

const result = toLowerCase(wrapInDiv(trim(input)));
*/

/* Composing and Piping with Lodash FP utilities */
// passing functions as reference
// but this is a little bit complicated to understand because the order of the implementation is reversed
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);


// one way to solve that problem is use pipe instead
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
transformPipe(input);



const trimCurr = str => str.trim();
// Currying concept applied to this example
// the first parameter received is the type , then the str processed by the other functions
// is applied to this function.
const wrapInDivCurr = type => str => `<${type}>${str}</${type}>`;
const toLowerCaseCurr = str => str.toLowerCase();

const transformPipe = pipe(trimCurr, toLowerCaseCurr, wrapInDivCurr("span"));
transformPipe(input);

