import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport { 
  startTransport(): void {
    const transport = this.createTransport();
    transport.startRoute();
  }
  protected abstract createTransport(): IVehicle;
}