import IpaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IpaymentInstrument {
  validate(): void {
    console.log('Verifying points');
  }
  collectPayment(): void {
    console.log("Pay with points");
  }
}