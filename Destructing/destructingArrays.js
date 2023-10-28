//Get the first value of the array

const animals = ["Cavalo", "Rato", "Gato"];

const [firstAnimal] = animals;

console.log(firstAnimal); //Cavalo

//Get the second or thid

const [, ,  thirdAnimal] = animals;

console.log(thirdAnimal); // Gato

