import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void { 
    this.getCargo(); 
    console.log("Iniciando o trajeto de drone."); 
  } 
  getCargo(): void { 
    console.log("Pegamos o pacote."); 
  }
  checkWind(): void {
    console.log("Verificando os ventos.");
  } 
}