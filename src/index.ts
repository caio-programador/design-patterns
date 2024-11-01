import BikeTransport from "./transport/BikeTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";


let transport: Transport;

if (process.argv.includes('--uber')) {
  transport = new CarTransport();
} else if (process.argv.includes('--log')) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes('--bike')) { 
  transport = new BikeTransport();
} else {;
  console.error('Please, select a transport type');
}

if(transport) {
  transport.startTransport();
}