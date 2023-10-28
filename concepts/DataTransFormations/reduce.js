const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

// Caclulate the max value from an array

// Another example

const max = ages.reduce((max, value) => (value > max ? value : max), 0);

//reduceRight exists works from end to begin

console.log("maxAge", maxAge);

//Transforming an array into Object

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
}, {});

/*
{
  xekare: { title: 'rad red', rating: 3 },
  jbwsof: { title: 'big blue', rating: 2 },
  prigbj: { title: 'grizzly grey', rating: 5 },
  ryhbhsl: { title: 'banana', rating: 1 }
}
*/

console.log(hashColors);

