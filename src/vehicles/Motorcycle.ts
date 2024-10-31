import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.configurationMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log("Starting the motorcycle...");
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`The motorcycle is ${color}, from ${year}, with a ${engine} engine.`);
    this.startVehicle();
  }

}