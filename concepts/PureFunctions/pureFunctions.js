// Example of a pure function

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
};

const selfEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
});

// selfEducate is a pure function, it computes a value based on the argument that was sent to it,

// the person, it returns a new person object without mutating the argument sent to it and therefore has no side effects



console.log(selfEducate(frederick)); 
console.log(frederick);

// { name: 'Frederick Douglass', canRead: true, canWrite: true }
// { name: 'Frederick Douglass', canRead: false, canWrite: false }

    // No Side Effects:
    // The function does not have any side effects on external state. It takes a person object as an argument, creates a new object with the same properties, and updates the canRead and canWrite properties. It returns a new object without modifying the original person object.

    // Deterministic:
    // The function's output is solely determined by its input. Given the same input (a person object), the function will always produce the same output. This property is important for predictability and testability.

    // No Dependency on External State:
    // The function doesn't rely on any external state or global variables. Everything it needs is passed through its parameters.

    // Immutability:
    // The function achieves immutability by creating a new object using the spread (...) operator. This ensures that the original person object remains unchanged.

