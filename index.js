import { use } from "react";

console.log('Hello, World!');
// This is a simple JavaScript file that logs "Hello, World!" to the console. You can run this code in a JavaScript environment, such as a web browser's developer console or Node.js, to see the output.   Feel free to modify the message or add more functionality as needed! \
// For example, you could create a function to greet a user by name:
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice');
greet('Bob');

function add(a, b) {
    return a + b;
}   
console.log(`The sum of 5 and 3 is: ${add(5, 3)}`);

// I want to add more functionality to this code. For instance, I could create a function that calculates the factorial of a number:
function factorial(n) {
    if (n === 0 || n === 1) {   
        return 1;
    }
    return n * factorial(n - 1);
}   
console.log(`The factorial of 5 is: ${factorial(5)}`);

