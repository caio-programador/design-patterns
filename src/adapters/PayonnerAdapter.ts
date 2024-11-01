import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
  private token: Token;

  constructor(private payonner: Payonner) { }

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    this.payonner.sendPayment();
  }

  paypalReceive(): void {
    this.payonner.receivedPayment();
  }
}