//page 27

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    // Log the destination and length properties of the current instance to the console
    console.log(this.destination + " | " + this.length + " days");
  }
}

const porto = new Vacation('Porto', 20);

porto.print();


