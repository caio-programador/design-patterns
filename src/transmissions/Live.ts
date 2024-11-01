import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {

  constructor(private platform: IPlatform) {
  }


  broadcasting(): void {
    console.log('Live broadcasting');
  }
  result(): void {
    console.log('Live result');
  }

}