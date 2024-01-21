/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersAgain = (a, b) => {
    return a + b;
}

// Single Line Arrow Function With Parameters (ES6)
const addTwoNumbers2 = (a, b) => a + b;
const addTwoNumbers3 = (a, b) => (a + b); //result can also be wrapped in braquets

// Implicit Returns
const saySomething = message => console.log(message); // only 1 parameter 'message' NO NEED for parenthesis
saySomething('Hello there!!');

const sayHello = () => console.log('Hello!');
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiple string!
    </p>`
) //MUST be wrapped in () !!!

