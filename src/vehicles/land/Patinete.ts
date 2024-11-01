import ILandVehicle from "./interfaces/ILandVehicle";

export default class Patinete implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto de patinete.");
  }

  getCargo(): void {
    console.log("Pegamos a encomenda.");
  }
}