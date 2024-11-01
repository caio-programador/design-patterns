import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando a decolagem...');
  }

  getCargo(): void {
    console.log('Pegamos a carga!');
  }

  checkWind(): void {
    console.log('Vento OK!');
  }
}