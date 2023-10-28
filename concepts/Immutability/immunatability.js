let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

// function rateColor(color, rating) {
//     color.rating = rating;
//     return color;
// }

// console.log(rateColor(color_lawn, 5).rating); // 5

// console.log(color_lawn.rating); // 5

// Changing the color rating like this changes/mutates the object the actual original data ,

//Rewriting rateColor Function so that it does not harm the original goods

const rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating }); // Takes a blank object, copies the color to that object, and overwrites the rating on the copy
};

console.log(rateColor(color_lawn, 5).rating); // 5

console.log(color_lawn.rating); // Now it returns 0 which is the original value

// Another approach to this 

const rateColor2 = (color, rating) => ({
    ...color,
    rating
});

// This is exactly the same as rateColor written with less syntax

