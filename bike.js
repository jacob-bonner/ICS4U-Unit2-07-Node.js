// Created By: Jacob Bonner
// Created On: December 2020
// This class is a subclass of Vehicle called bike.

// Importing the airplane class from another file
const Vehicle = require("./vehicle.js");

class Bike extends Vehicle {
  // Constructor that defines fields
  constructor(bikeColour) {
    super(bikeColour);
    this.colour = bikeColour;
    this.cadence = 0;
  }

  // This method shows the user's cadence
  getCadence() {
    // Calculating and returning cadence
    //   Equation of speed over 8.3 was derived by using average
    //   specifications of a bicycle to determine average multiplier
    this.cadence = super.getSpeed() * 8.3;
    return this.cadence;
  }

   // This method rings the bike's bell.
  ringBell() {
    return "RING";
  }
}

// Exporting the subclass
module.exports = Bike;
