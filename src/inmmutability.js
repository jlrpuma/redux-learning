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