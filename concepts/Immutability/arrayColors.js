let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink " }];

// const addColor = function (title, colors) {
//     colors.push({
//         title: title
//     });
//     return colors;
// };

// array push is not an immutable function

// addColor changes the original array by adding another field

// Array concat

const addColor = (title, array) => array.concat({ title });

//Array.concat concatenates arrays. In this case, it takes a new object with a new color title and adds it to a copy of the original array

// Another approach

const addColor2 = (title, array) => [...list, { title }];

//  This function copies the original list to a new array and then adds a new object containing the color's title to that copy

// It is immutable




console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // it should print 3 









