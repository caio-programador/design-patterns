import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle{
  startRoute(): void {
    this.getCargo();
    console.log('Bike starting the delivery...')
  }
  getCargo(): void {
    console.log('Picking up the package!')
  }

}