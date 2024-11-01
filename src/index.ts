import { VehicleBuilder } from "./builder/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedan();

const sedan: Vehicle = builder.getVehicle();

console.log(sedan);

director.constructTruck();
const truck = builder.getVehicle();

console.log(truck);

director.constructMotorcycle();
const motorcycle = builder.getVehicle();
console.log(motorcycle);