const peaks = ["Taloc", "Everest", "Rosa"];

const [lastPeak] = peaks.reverse();

console.log(lastPeak); // Rosa

console.log(peaks.join(", ")); //Rosa, Everest, Taloc mutated array

//unmutated

const second_peaks = ["Taloc", "Everest", "Rosa"];

const [lastSecondPeak] = [...second_peaks].reverse();

console.log(lastSecondPeak); // Rosa

console.log(second_peaks.join(", ")); //Taloc, Everest, Rosa

// function arguments as an array

function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stop] = remaining.reverse();

  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stop.length} times in between`);
}

directions("Lisboa", "Santarém", "Coimbra", "Lousa", "Pedrógão", "Castelo Branco");

//obects 

const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeals = {...morning, dinner};

console.log(backpackingMeals);

