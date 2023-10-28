// adding functions inside array, is possible

const messages = [
  "They can be inserted into arrays",
  (message) => console.log(message),
  "like variables",
  (message) => console.log(message),
];

messages[1](messages[0]); 
messages[3](messages[2]);

//Functions can be sent to other functions as arguments, just like other variables

const insideFn = (logger) => {
  logger("They can be sent to other functions as arguments");
};

insideFn((message) => console.log(message));

// They can also be returned from other functions as arguments

const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream((message) => console.log(message));
scream("functions can be returned from other functions!");
// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!!
scream("createScream returns a function");
// CREATESCREAM RETURNS A FUNCTION!!!
scream("scream invokes that returned function");
//SCREAM INVOKES THAT RETURNED FUNCTION!!!

//examples of high order functions
