import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando a decolagem...');
  }

  getCargo(): void {
    console.log('Passageiros a bordo!');
  }

  checkWind(): void {
    console.log('Ventos a 30km/h. Vento OK!');
  }
}