import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    this.token = this.authToken();
    console.log("Token: " + this.token.getToken());
    console.log("PayPal payment");
  }

  paypalReceive(): void {
    console.log("Receive payment with PayPal");
  }
}