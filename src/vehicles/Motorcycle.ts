import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

  constructor(
    color: string,
    year: number,
    engine: number,
  ) { 
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    
    console.log('Vehicle is starting...');
  }
  configure(color: string, year: number, engine: number): void {
    
    console.log(`This motorcycle is ${color} and was made in ${year} 
      with a ${engine} engine`);

    this.startVehicle();
  }

}