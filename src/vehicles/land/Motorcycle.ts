import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciando a entrega com a moto...');
  }

  getCargo(): void {
    console.log('Pegamos com a moto encomenda!');
  }
}