// High Order Function
// This is a higher-order function named 'invokeIf' that takes a condition and two functions as parameters.
const invokeIf = (condition, fnTrue, fnFalse) =>
  // If the condition is true, it calls the function fnTrue; otherwise, it calls the function fnFalse.
  condition ? fnTrue() : fnFalse();

// Function to show a welcome message
const showWelcome = () => console.log("Welcome! 🫡");

// Function to show an unauthorized message
const showUnauthorized = () => console.log("Unauthorized! 🟥");

// Using the higher-order function 'invokeIf' to demonstrate its functionality
// The condition is true, so it will invoke showWelcome
invokeIf(true, showWelcome, showUnauthorized); // Output: Welcome! 🫡

// The condition is false, so it will invoke showUnauthorized
invokeIf(false, showWelcome, showUnauthorized); // Output: Unauthorized! 🟥