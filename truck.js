// Created By: Jacob Bonner
// Created On: December 2020
// This class is a subclass of Vehicle called truck.

// Importing the airplane class from another file
const Vehicle = require("./vehicle.js");

// This vehicle subclass is a truck
class Truck extends Vehicle {
  // Constructor that defines fields
  constructor(truckColour) {
    super(truckColour);
    this.colour = truckColour;
    this.licensePlateNumber = "DEFAULT";
  }

  // This setter sets the license plate of the truck
  setLicensePlate(licensePlateInput) {
    this.licensePlateNumber = licensePlateInput;
  }

  // This getter shows the user the license plate of the truck
  getLicensePlate() {
    return this.licensePlateNumber;
  }

  // This method blows the truck's horn
  provideAir() {
    return "HONK";
  }
}

// Exporting the subclass
module.exports = Truck;
