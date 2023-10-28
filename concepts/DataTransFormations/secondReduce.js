//Array of unique values using reduce

const colors = ["red", "red", "green", "blue", "green", "yellow"];

const uniqueColors = colors.reduce((unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color], //in case === 1 which means it found return the current state of unique array, else return copy of unique with the color
    []
);

console.log(uniqueColors);


console.log('Resultado:', colors.indexOf('pink')); // -1

