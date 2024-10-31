import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number
  ) {
    this.configurationCar(color, year, engine, seats);
  }


  startVehicle(): void {
    console.log("Starting the car...");
  }
  configurationCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`The car is ${color}, from ${year}, with a ${engine} engine and ${seats} seats.`);
    
    this.startVehicle();
  
  }

}