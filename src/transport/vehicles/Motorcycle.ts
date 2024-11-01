import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Motorcycle starting the delivery...')
  }
  getCargo(): void {
    console.log('Picking up the food!')
  }
}