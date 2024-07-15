// Example of Closures
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

// Advanced Closure: Module Pattern
const CounterModule = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(CounterModule.increment()); // Outputs: 1
console.log(CounterModule.increment()); // Outputs: 2
console.log(CounterModule.decrement()); // Outputs: 1
console.log(CounterModule.getCount()); // Outputs: 1
