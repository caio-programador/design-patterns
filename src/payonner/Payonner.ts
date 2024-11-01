import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }
  sendPayment(): void {
    this.token = this.authToken();
    console.log("Payonner Payment sent with token: ", this.token.getToken());
  }
  receivedPayment(): void {
    console.log("Payonner Payment received");
  }
}