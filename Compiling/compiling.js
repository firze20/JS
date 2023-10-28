//Normal

const add = (x, y) => x+y;

console.log(add(5,2));

"use strict" //runs in strict mode

var sub = function sub() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
    return console.log(x-y);
}

sub();