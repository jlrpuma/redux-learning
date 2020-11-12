const person = {name : "John"};
// copy the content from an object to another object (empty)
// the third parameter is a modification of the object that want to be copied
const updated = Object.assign({}, person, {name: "Bob", age: 30});

// There is an elegant way to perform this action (spread operator sintax)
// be carefull with nested objects.....
/* the spread operator create a shadow copy, that means the nested objects are copied by reference
so if you change a property on a nested object this will change the original person object  */
const updated = {...person, name: "Bob", age: 30};

// ----------------------------------------------------------------
// example of nested object 
const personNested = 
    {
        name : "John",
        address: {
            country: "USA",
            city: "San Francisco"
        }
    };

// Deep copy example
// in this case the property addres is created as a new reference 
// and the values inside on it are filled by a copy of the person address copy values
const updatedNestedPerson = 
    {
        ...person, 
        address: {
            ...person.address,
            city: "New York"
        },
        name: "Bob"
    }

// In this way we avoid the error to upgrade porperties nested on our original object.
console(updatedNestedPerson);

/* Inmmutability working with arrays */

const numbers = [1, 2, 3];

// adding at the end
const added = [...numbers, 4];
// adding at the beggining
const added = [4, ...numbers];

// using specific positions
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]
// resultant array [1, 4, 2, 3]
 
// removing element 2
const removed = numbers.filter(n => n !== 2);

// updating 
// if we want to replace the 2 value with an object we must have in count 
// the deep copy of the values on it...
const updated = numbers.map(n => n === 2 ? 20 : n)


