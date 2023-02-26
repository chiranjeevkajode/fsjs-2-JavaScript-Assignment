// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


const operation = prompt('Enter operation ( +, -, * or / ): ');

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

if (operation == '+') {
    result = num1 + num2;
}
else if (operation == '-') {
    result = num1 - num2;
}
else if (operation == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

console.log(`${num1} ${operation} ${num2} = ${result}`);