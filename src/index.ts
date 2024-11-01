import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercado-pago/MercadoPago";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";


const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment.paypalPayment();
payment.paypalReceive();

const newPayment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago())
newPayment.paypalPayment();
newPayment.paypalReceive();