//page 28

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

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);

    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const trip = new Expedition("Serra da Estrela", 30, [
  "plank",
  "wood",
  "food",
  "clothes",
  "bags",
  "tent",
]);

trip.print();
