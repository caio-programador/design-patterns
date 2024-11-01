import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Car starting the route...')
  }
  getCargo(): void {
    console.log('Picking up the passengers!')
  }
}