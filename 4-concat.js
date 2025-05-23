// 1. Declare a function named `sum` that takes two parameters, `num1` and `num2`.
// 2. Inside the function, return the sum of `num1` and `num2`.
// 3. After the function declaration, call the function with two numbers as arguments and store the result in a variable.
// 4. Use `console.log()` to print the result to the console.

const args = process.argv.slice(2);

console.log(`${args[0]} is ${args[1]}`);
