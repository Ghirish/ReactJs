// Global Scope
let globalVar = 'Global';

function outerFunction() {
    // Local Scope within outerFunction
    let outerVar = 'Outer';

    function innerFunction() {
        // Local Scope within innerFunction
        let innerVar = 'Inner';
        console.log(globalVar); // Outputs: Global
        console.log(outerVar); // Outputs: Outer
        console.log(innerVar); // Outputs: Inner
    }

    innerFunction();
    try {
        console.log(innerVar); // Error: innerVar is not defined
    } catch (error) {
        console.error(error);
    }
}

outerFunction();
try {
    console.log(outerVar); // Error: outerVar is not defined
} catch (error) {
    console.error(error);
}
