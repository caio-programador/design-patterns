import { TypeVehicle } from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Red", 2021, 2.0, 4, 4);

}else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Red", 2021, 2.0);
}
