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

const updatedNestedPerson = {...person, name: "Bob"}

//this code is going to change the city on the personNested Object
// the reason is the copy of the nested object is actually a reference to the nested object
// inside personNested....
updatedNestedPerson.address.city = "New York" 
console.log(personNested)