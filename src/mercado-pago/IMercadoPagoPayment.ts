import Token from "../utils/Token"

export default interface IMercadoPagoPayment {
  authToken(): Token
  pagar(): void
  receber(): void
}