import MercadoPago from "../mercado-pago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  private token: Token;

  constructor(private mercadoPago: MercadoPago) {}

  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    this.token = this.authToken();
    this.mercadoPago.pagar();
  }
  paypalReceive(): void {
    this.mercadoPago.receber();
  }

}