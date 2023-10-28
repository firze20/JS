
//This works, you can call functions before they have been declared

hey();

function hey() {
    console.log('hey');
}

// this doesn't work

halo();

const halo = function() {
    console.log('Halo')
}