// Consider this array of high schools

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

// Original array is still intact
console.log(schools.join(", "));

// Original array is still intact

//Array filter is immutable
const wSchools = schools.filter(school => school[0] === 'W');

console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

console.log(schools.join("\n"));

// Array map map does not mutate the original array but creates a new array
const highSchools = schools.map((school) => `${school} High School`);

console.log(highSchools.join("\n"));

console.log(schools);

