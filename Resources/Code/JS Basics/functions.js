// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Outputs: Hello, Alice!

// Utility Function Example using Function Expression
const add = function(a, b) {
    return a + b;
};

const multiply = function(a, b) {
    return a * b;
};

// Using the utility functions
console.log(add(2, 3)); // Outputs: 5
console.log(multiply(2, 3)); // Outputs: 6

// Trick: Function Expression not hoisted
try {
    console.log(subtract(5, 2)); // Error: subtract is not defined
} catch (error) {
    console.error(error);
}

const subtract = function(a, b) {
    return a - b;
};
