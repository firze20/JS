// Define a recursive function 'countdown' that takes a 'value' and a callback function 'fn'
const countdown = (value, fn) => {
  // Call the callback function 'fn' with the current 'value'
  fn(value);

  // Check if 'value' is greater than 0
  // If true, recursively call 'countdown' with the decremented 'value' and the same callback function 'fn'
  // If false, return the final value (base case for the recursion)
  return value > 0 ? countdown(value - 1, fn) : value;
};

// Call the 'countdown' function with an initial value of 10
// Pass a callback function that logs the current value to the console
countdown(10, (value) => console.log(value));

