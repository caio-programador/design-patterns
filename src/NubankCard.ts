import IpaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IpaymentInstrument {
  validate(): void {
    console.log("Validating Nubank card");
  }
  collectPayment(): void {
    console.log("Collecting payment with Nubank card");
  }
  
}