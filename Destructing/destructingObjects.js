const sandwich = {
    bread: 'Bimbo',
    meat: 'Atum',
    cheese: 'Flamengo',
    toppings: ["alface", "tomate", "mostarda"]
};

const {toppings} = sandwich;

const logToppings = toppings.forEach(top => console.log(top));

// destructure function arguments

const regularPerson = {
    firstName: 'Mack',
    lastName: 'Goldberg'
}
//destruct the key firstName
const lordify = ({firstName}) => {
    console.log(`${firstName} of house Warrior`)
};

//passing the full object to the function, but the function will only get the first name
lordify(regularPerson);

