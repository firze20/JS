// Define an object 'dan' with nested properties
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

// Define a recursive function 'deepPick' that extracts nested properties from an object
const deepPick = (fields, object = {}) => {
  // Destructure the fields into the first field and the remaining fields
  const [first, ...remaining] = fields.split(".");

  // If there are remaining fields, recursively call 'deepPick' with the remaining fields and the corresponding nested object
  // Otherwise, return the value of the final field
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};

// Test 'deepPick' function by extracting the "type" property from 'dan'
console.log(deepPick("type", dan)); // Output: person

// Test 'deepPick' function by extracting the nested property "data.info.fullname.first" from 'dan'
console.log(deepPick("data.info.fullname.first", dan)); // Output: Dan

// First Iteration
// first = "data"
// remaining.join(".") = "info.fullname.first"
// object[first] = { gender: "male", {info}}

// Second Iteration
// first = "info"
// remaining.join(".") = "fullname.first"
// object[first] = {id: 22, {fullname}}

// Third Iteration
// first = "fullname"
// remaining.join(".") = "first"
// object[first] = { first: "Dan", last: "Deacon" }

// Finally
// first = "first"
// remaining.length = 0
// object[first] = "Deacon"
