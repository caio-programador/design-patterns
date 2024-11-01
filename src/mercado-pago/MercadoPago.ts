import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }
  pagar(): void {
    this.token = this.authToken();
    console.log("Pagamento realizado com sucesso no Mercado Pago");
  }
  receber(): void {
    console.log("Recebimento realizado com sucesso no Mercado Pago");
  }

}