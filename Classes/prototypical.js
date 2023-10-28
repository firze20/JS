//Page 27

// Define a constructor function called Vacation with parameters destination and length
function Vacation(destination, length) {
  // Within the constructor, set the properties destination and length for each instance
  this.destination = destination;
  this.length = length;
}

// Add a method named 'print' to the prototype of the Vacation constructor
Vacation.prototype.print = function () {
  // Log the destination and length properties of the current instance to the console
  console.log(this.destination + " | " + this.length + " days");
};

// Create a new instance of Vacation with the destination "Lisboa" and length 10 days
const lisboa = new Vacation("Lisboa", 10);

// Call the 'print' method on the lisboa instance, which logs "Lisboa | 10 days" to the console
lisboa.print();

