const template = "hh:mm:ss tt";
const clockTime = template
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");

console.log(clockTime);

//chaining replace methods

// Define a function called 'compose' using arrow function syntax
const compose =
  // The 'compose' function takes any number of functions as arguments using the rest parameter syntax (...fns)

    (...fns) =>
    // Return a new function that takes an argument 'arg'
    (arg) =>
      // Use the 'reduce' function to apply each function in 'fns' to the accumulated result
      fns.reduce(
        // The callback function takes two parameters: 'composed' (the accumulated result) and 'f' (the current function)
        (composed, f) =>
          // Apply the current function 'f' to the accumulated result 'composed'
          f(composed),
        // The initial value for 'reduce' is 'arg', meaning the first function in 'fns' is applied to 'arg'
        arg
      );

// Example usage of 'compose'
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const square = (x) => x ** 2;

// Compose the functions to create a new function
const composedFunction = compose(add2, multiply3, square);

// Call the composed function with an argument (e.g., 3)
const result = composedFunction(3);

// Log the result to the console
console.log(result); // Output: 225
