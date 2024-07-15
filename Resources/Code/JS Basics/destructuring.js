// Destructuring Arrays
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(third); // Outputs: 3

// Destructuring Objects
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Outputs: Alice
console.log(age); // Outputs: 25
console.log(city); // Outputs: New York

// Destructuring Function Parameters
const printPerson = ({ name, age, city }) => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
};

printPerson(person); // Outputs: Name: Alice, Age: 25, City: New York
