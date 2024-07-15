// Arrow Functions
const add = (a, b) => a + b;

console.log(add(2, 3)); // Outputs: 5

// Arrow Functions in React
const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

// Arrow Functions with this context
function Timer() {
    this.seconds = 0;

    setInterval(() => {
        this.seconds++;
        console.log(this.seconds); // `this` correctly refers to Timer object
    }, 1000);
}

const timer = new Timer();
