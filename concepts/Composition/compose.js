// Define a function called 'compose' using arrow function syntax
export const compose =
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
