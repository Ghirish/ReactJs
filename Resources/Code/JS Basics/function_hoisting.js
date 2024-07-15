// Function Hoisting
console.log(sum(5, 3)); // Outputs: 8

function sum(a, b) {
    return a + b;
}

// Function Expressions are not hoisted
try {
    console.log(diff(5, 3)); // Error: diff is not defined
} catch (error) {
    console.error(error);
}

const diff = function(a, b) {
    return a - b;
};
