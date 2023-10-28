const person = "Mark";

const age = 28;

const markDetails = { person, age };

console.log(markDetails);

// with object methods

const _name = "Laveck";

const titleWins = 29;

const print = function () {
  console.log(
    `His name is ${_name}, and has successfully defended his title ${titleWins} times`
  );
};

//new object
const wrestler = { _name, titleWins, print };

wrestler.print();
