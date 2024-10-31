import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number,
  ) { 
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    
    console.log('Vehicle is starting...');
  }
  configure(color: string, year: number, engine: number, seats: number, doors: number): void {
    
    console.log(`This car is ${color} and was made in ${year} 
      with a ${engine} engine, ${seats} seats and ${doors} doors`);

    this.startVehicle();
  }

}