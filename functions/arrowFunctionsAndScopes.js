//Arrow functions and scopes

// This doesn't work
// const tahoe = {
//     mountains: ['Serra da Estrela', "Serra da Amoreira", "Montanha da luz", "Monte de Santa Maria"],
//     print: function(delay = 1000) {
//         setTimeout(function(){
//             console.log(this.mountains.join(", "));
//         }, delay)
//     },

// }

// tahoe.print();

// but this works tho

const tahoe = {
    mountains: ['Serra da Estrela', "Serra da Amoreira", "Montanha da luz", "Monte de Santa Maria"],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay)
    },

}

tahoe.print();