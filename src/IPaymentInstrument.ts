export default interface IpaymentInstrument {
  validate(): void;
  collectPayment(): void;
}