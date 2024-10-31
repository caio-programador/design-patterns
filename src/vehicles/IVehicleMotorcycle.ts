export default interface IVehicleCar { 


  startVehicle(): void;
  configure(
    color: string,
    year: number,
    engine: number,
  ): void;
}